// app/api/contact/route.ts
export async function POST(request: Request) {
    try {
      const { name, email, company, details } = await request.json();
  
      if (!name || !email || !details) {
        return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), { status: 400 });
      }
  
      const domain = process.env.MAILGUN_DOMAIN!;
      const apiKey = process.env.MAILGUN_API_KEY!;
      const region = (process.env.MAILGUN_REGION || "US").toUpperCase();
      const base = region === "EU" ? "https://api.eu.mailgun.net" : "https://api.mailgun.net";
      const url = `${base}/v3/${domain}/messages`;
  
      const subject = `New contact from ${name}${company ? ` (${company})` : ""}`;
  
      // Option A: simple HTML/text email
      const params = new URLSearchParams({
        from: process.env.MAILGUN_FROM!,        // e.g. support@hiregrid.io
        to: process.env.MAILGUN_TO!,            // your inbox
        subject,
        text: `Name: ${name}
  Email: ${email}
  Company: ${company || "-"}
  Details:
  ${details}
  `,
        html: `
          <h2>CuraLabel Contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "-"}</p>
          <p><strong>Details:</strong></p>
          <pre style="white-space:pre-wrap;font-family:ui-sans-serif,system-ui">${details}</pre>
        `,
        "h:Reply-To": email,
      });
  
      // If you want to use a stored Mailgun template instead, comment out the block above
      // and use Option B below:
      //
      // const templateName = "contact-template"; // your Mailgun template name
      // const variables = { name, email, company, details };
      // const params = new URLSearchParams({
      //   from: process.env.MAILGUN_FROM!,
      //   to: process.env.MAILGUN_TO!,
      //   subject,
      //   template: templateName,
      //   "h:X-Mailgun-Variables": JSON.stringify(variables),
      //   "h:Reply-To": email,
      // });
  
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Basic " + Buffer.from(`api:${apiKey}`).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
        // Mailgun API returns JSON; Next.js Node runtime is fine here
      });
  
      if (!res.ok) {
        const msg = await res.text();
        console.error("Mailgun error:", res.status, msg);
        return new Response(JSON.stringify({ ok: false, error: "Email failed" }), { status: 502 });
      }
  
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } catch (err) {
      console.error(err);
      return new Response(JSON.stringify({ ok: false, error: "Server error" }), { status: 500 });
    }
  }
  