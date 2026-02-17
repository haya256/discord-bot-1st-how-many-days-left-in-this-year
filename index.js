const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

if (!webhookUrl) {
  console.error("Error: DISCORD_WEBHOOK_URL is not set.");
  process.exit(1);
}

const now = new Date();
const year = now.getFullYear();
const endOfYear = new Date(year, 11, 31); // 12月31日

const msPerDay = 1000 * 60 * 60 * 24;
const daysLeft = Math.ceil((endOfYear - now) / msPerDay);

const message = `今日は ${year}年${now.getMonth() + 1}月${now.getDate()}日です。\n今年もあと **${daysLeft}日** です！`;

const response = await fetch(webhookUrl, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ content: message }),
});

if (!response.ok) {
  console.error(`Failed to send message: ${response.status} ${response.statusText}`);
  process.exit(1);
}

console.log("Message sent successfully.");
