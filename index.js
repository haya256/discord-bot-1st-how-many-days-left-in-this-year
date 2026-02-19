const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

if (!webhookUrl) {
  console.error("Error: DISCORD_WEBHOOK_URL is not set.");
  process.exit(1);
}

// JST = UTC + 9 hours
const jstNow = new Date(Date.now() + 9 * 60 * 60 * 1000);

const year = jstNow.getUTCFullYear();
const month = jstNow.getUTCMonth(); // 0-indexed
const day = jstNow.getUTCDate();

const msPerDay = 1000 * 60 * 60 * 24;
const jstToday = new Date(Date.UTC(year, month, day));
const jstEndOfYear = new Date(Date.UTC(year, 11, 31)); // 12月31日
const daysLeft = (jstEndOfYear - jstToday) / msPerDay + 1;

const message = `今日は ${year}年${month + 1}月${day}日です。\n今年もあと **${daysLeft}日** です！`;

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
