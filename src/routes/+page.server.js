import nodemailer from 'nodemailer';
import { fail } from '@sveltejs/kit';

export const actions = {
	submit: async ({ request }) => {
		// 1. Získání dat z formuláře
		const data = await request.formData();
		const name = data.get('name');
		const phone = data.get('phone');
		const brand = data.get('brand');
		const vin = data.get('vin');
		const date = data.get('date');
		const message = data.get('message');

		// 2. Základní validace
		if (!name || !phone) {
			return fail(400, { message: 'Jméno a telefon jsou povinné údaje pro dokončení rezervace.' });
		}

		// 3. Konfigurace pro Gmail (nebo váš SMTP server)
		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: 'marwintv44@gmail.com', // ZDE DOPLŇTE: Váš Gmail
				pass: 'hing sikh kxkl iefp' // ZDE DOPLŇTE: Vaše Heslo aplikace
			}
		});

		try {
			// 4. Odeslání e-mailu s prémiovým HTML designem
			await transporter.sendMail({
				from: '"ApexMotors Web" <marwintv44@gmail.com>', // ZDE DOPLŇTE: Stejný Gmail jako u "user"
				to: 'marwintv44@gmail.com', // ZDE DOPLŇTE: E-mail, kam chcete upozornění dostávat
				subject: `Nová rezervace servisu: ${name} - ${brand || 'Neuvedeno'}`,
				html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                    <div style="background-color: #0a0a0a; padding: 24px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 800; letter-spacing: 2px;">
                            APEX<span style="color: #dc2626;">MOTORS</span>
                        </h1>
                    </div>

                    <div style="padding: 32px; background-color: #ffffff;">
                        <h2 style="margin-top: 0; color: #111827; font-size: 20px; border-bottom: 2px solid #dc2626; padding-bottom: 12px; display: inline-block;">Nová poptávka z webu</h2>

                        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; width: 35%; color: #6b7280; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Zákazník</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 600; font-size: 16px;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Telefon</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; font-size: 16px;">
                                    <a href="tel:${phone.replace(/\s+/g, '')}" style="color: #dc2626; text-decoration: none;">${phone}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Značka a model</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px;">${brand || '<span style="color: #9ca3af; font-style: italic;">Neuvedeno</span>'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">SPZ / VIN</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-family: monospace; font-size: 16px; letter-spacing: 1px;">${vin || '<span style="color: #9ca3af; font-family: sans-serif; font-size: 14px; letter-spacing: normal; font-style: italic;">Neuvedeno</span>'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Preferovaný termín</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px;">${date || '<span style="color: #9ca3af; font-style: italic;">Neuvedeno</span>'}</td>
                            </tr>
                        </table>

                        <div style="margin-top: 28px; background-color: #f9fafb; padding: 20px; border-radius: 6px; border-left: 4px solid #dc2626;">
                            <h3 style="margin-top: 0; margin-bottom: 12px; color: #374151; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Popis problému / Požadavek</h3>
                            <p style="margin: 0; color: #1f2937; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${message || '<span style="color: #9ca3af; font-style: italic;">Zákazník nevyplnil žádnou dodatečnou zprávu.</span>'}</p>
                        </div>
                    </div>

                    <div style="background-color: #f3f4f6; padding: 16px; text-align: center; color: #9ca3af; font-size: 12px;">
                        Tento e-mail byl automaticky odeslán z webového formuláře ApexMotors.
                    </div>
                </div>
                `
			});

			return { success: true };
		} catch (error) {
			console.error('Chyba při odesílání e-mailu:', error);
			return fail(500, {
				message: 'Omlouváme se, při odesílání formuláře nastala chyba na serveru.'
			});
		}
	}
};
