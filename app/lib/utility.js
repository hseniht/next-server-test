const crypto = require("crypto");

// Function to encrypt each field
export const encryptData = (data, key) => {
  console.log("in Encrypt key is", process.env.ENCRYPTION_KEY);

  const encryptedData = {};
  for (const field in data) {
    if (data.hasOwnProperty(field)) {
      const fieldValue = data[field];
      const cipher = crypto.createCipher(
        "aes-256-cbc",
        key
        // process.env.ENCRYPTION_KEY
      );
      let encryptedValue = cipher.update(fieldValue, "utf-8", "hex");
      encryptedValue += cipher.final("hex");
      encryptedData[field] = encryptedValue;
    }
  }
  return encryptedData;
};

// Function to decrypt each field
export const decryptData = (encryptedData, key) => {
  console.log("in decrypt key is", process.env.ENCRYPTION_KEY);
  const decryptedData = {};
  for (const field in encryptedData) {
    if (encryptedData.hasOwnProperty(field)) {
      const encryptedValue = encryptedData[field];
      const decipher = crypto.createDecipher(
        "aes-256-cbc",
        process.env.ENCRYPTION_KEY
      );
      let decryptedValue = decipher.update(encryptedValue, "hex", "utf-8");
      decryptedValue += decipher.final("utf-8");
      decryptedData[field] = decryptedValue;
    }
  }
  return decryptedData;
};

