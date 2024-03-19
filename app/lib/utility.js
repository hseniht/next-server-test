const crypto = require("crypto");

// Function to encrypt each field
export const encryptData = (data, key) => {

  const encryptedData = {};
  for (const field in data) {
    if (data.hasOwnProperty(field)) {
      const fieldValue = data[field];
      const cipher = crypto.createCipher(
        "aes-256-cbc",
        key
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
  const decryptedData = {};
  for (const field in encryptedData) {
    if (encryptedData.hasOwnProperty(field)) {
      const encryptedValue = encryptedData[field];
      const decipher = crypto.createDecipher(
        "aes-256-cbc",
        process.env.NEXT_PUBLIC_ENCRYPTION_KEY
      );
      let decryptedValue = decipher.update(encryptedValue, "hex", "utf-8");
      decryptedValue += decipher.final("utf-8");
      decryptedData[field] = decryptedValue;
    }
  }
  return decryptedData;
};
