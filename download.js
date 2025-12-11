import fs from "fs";
import path from "path";

export const handler = async (event, context) => {
  const filePath = path.join(process.cwd(), "downloads.json");

  // Read current count
  let data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  data.count++;

  // Update count
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  // Redirect user to APK download
  return {
    statusCode: 302,
    headers: { Location: "/app.apk" }
  };
};
