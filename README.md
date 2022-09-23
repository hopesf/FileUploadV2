# File Upload System V2

This project is a file upload system written in NodeJS.
**It can be used by adapting to frameworks.**

<div align="left">

 [![stars - FileUploadV2](https://img.shields.io/github/stars/hopesf/FileUploadV2?style=social)](https://github.com/hopesf/FileUploadV2)
 [![forks - FileUploadV2](https://img.shields.io/github/forks/hopesf/FileUploadV2?style=social)](https://github.com/hopesf/FileUploadV2)
 [![hopesf - FileUploadV2](https://img.shields.io/static/v1?label=hopesf&message=FileUploadV2&color=blue&logo=github)](https://github.com/hopesf/FileUploadV2 'Go to GitHub repo')
 [![GitHub tag](https://img.shields.io/github/tag/hopesf/FileUploadV2?include_prereleases=&sort=semver)](https://github.com/hopesf/FileUploadV2/releases/)
 [![License](https://img.shields.io/badge/License-Apache--2.0_license-blue)](#license)
 [![issues - FileUploadV2](https://img.shields.io/github/issues/hopesf/FileUploadV2)](https://github.com/hopesf/FileUploadV2/issues)

</div>

## API Usage

Upstairs of this directory are the file/files uploaded in the "public_html/uploads" directory.

### Upload Single/Multi File

```url
  POST /upload
```

| Parameters | Type       | Description                                                                     |
| :--------- | :--------- | :------------------------------------------------------------------------------ |
| `body`     | `formData` | You should convert the pictures you choose to formatta and send them as a post. |

### Access Uploaded File

```url
  GET /uploads/uploadedfilename.png
```

### HTML

```html
<form id="uploadform" enctype="multipart/form-data">
  <input type="file" id="myfiles" multiple />
  <button>submit</button>
</form>
```

### Vanilla JS

```js
const form = document.getElementById('uploadform');

const sendFiles = async () => {
  const myFiles = document.getElementById('myfiles').files;
  const formData = new FormData();

  Object.keys(myFiles).forEach((key) => {
    formData.append(myFiles.item(key).name, myFiles.item(key));
  });

  const response = await fetch('http://localhost:3100/upload', {
    method: 'POST',
    body: formData,
  });

  const json = await response.json();

  const h2 = document.querySelector('h2');
  h2.textContent = `status: ${json?.status}`;

  const h3 = document.querySelector('h3');
  h3.textContent = json?.message;

  console.log(json);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  sendFiles();
});
```

## License

Released under [Apache-2.0 license](/LICENSE) by [@hopesf](https://github.com/hopesf).
