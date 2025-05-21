export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { response } = req.body;
    const token = process.env.BOT_TOKEN;
    const chatId = process.env.CHAT_ID;
    const text = `🦋 Crush answer:\n\n${response}`;

    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    try {
      await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text })
      });
      res.status(200).json({ success: true });
    } catch (e) {
      res.status(500).json({ error: 'telegram request failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
