class ImageUploader {
  async upload(file) {
    // 서버에 업로드하고 업로드가 완료되면 그 결과값을 받아야 하니 async 사용
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "iqhqvdfz");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dzvotkila/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
