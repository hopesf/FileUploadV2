
# File Upload System V2

This project is a file upload system written in NodeJS.
**It can be used by adapting to frameworks.**

<div align="center">

# Badge Generator <br> :shield: :badger: :mage:

> Magically generate Markdown badges for your docs
[![GH Pages Deploy](https://github.com/MichaelCurrin/badge-generator/workflows/GH%20Pages%20Deploy/badge.svg)](https://github.com/MichaelCurrin/badge-generator/actions/workflows/main.yml "GitHub Actions workflow status")
[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/badge-generator)](https://github.com/MichaelCurrin/badge-generator/releases/?include_prereleases&sort=semver "View GitHub releases")
[![License](https://img.shields.io/badge/License-MIT-blue)](#license "Go to license section")

[![CodeQL](https://github.com/MichaelCurrin/badge-generator/workflows/CodeQL/badge.svg)](https://github.com/MichaelCurrin/badge-generator/actions?query=workflow%3ACodeQL "Code quality workflow status")
[![Known Vulnerabilities](https://snyk.io/test/github/MichaelCurrin/badge-generator/badge.svg?targetFile=package.json)](https://snyk.io/test/github/MichaelCurrin/badge-generator?targetFile=package.json "Snyk vulnerabilities")
[![LGTM](https://img.shields.io/lgtm/grade/javascript/github/MichaelCurrin/badge-generator?logo=lgtm)](https://lgtm.com/projects/g/MichaelCurrin/badge-generator/context:javascript "View Code Quality checks on LGTM.com")

[![Made with Node](https://img.shields.io/badge/dynamic/json?label=node&query=%24.engines%5B%22node%22%5D&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fbadge-generator%2Fmaster%2Fpackage.json)](https://nodejs.org "Go to Node.js homepage")
[![Package - Yarn](https://img.shields.io/badge/yarn->=1-blue?logo=yarn&logoColor=white)](https://classic.yarnpkg.com "Go to Yarn classic homepage")
[![Package - Vue](https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue?logo=vue.js&logoColor=white)](https://www.npmjs.com/package/vue "Go to Vue on NPM")
[![Package - Typescript](https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/dev/typescript?logo=typescript&logoColor=white)](https://www.npmjs.com/package/typescript "Go to TypeScript on NPM")

[Website](https://michaelcurrin.github.io/badge-generator/) — [Sample badges](#sample-badges) — [Documentation](/docs/#readme)

</div>


<p float="left">
  [![stars - FileUploadV2](https://img.shields.io/github/stars/hopesf/FileUploadV2?style=social)](https://github.com/hopesf/FileUploadV2)
[![forks - FileUploadV2](https://img.shields.io/github/forks/hopesf/FileUploadV2?style=social)](https://github.com/hopesf/FileUploadV2)
[![hopesf - FileUploadV2](https://img.shields.io/static/v1?label=hopesf&message=FileUploadV2&color=blue&logo=github)](https://github.com/hopesf/FileUploadV2 "Go to GitHub repo")
[![GitHub tag](https://img.shields.io/github/tag/hopesf/FileUploadV2?include_prereleases=&sort=semver)](https://github.com/hopesf/FileUploadV2/releases/)
[![License](https://img.shields.io/badge/License-Apache--2.0_license-blue)](#license)
[![issues - FileUploadV2](https://img.shields.io/github/issues/hopesf/FileUploadV2)](https://github.com/hopesf/FileUploadV2/issues)
</p>



## API Usage

### Upload Single/Multi File

```http
  POST /upload
```

| Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body` | `formData` | You should convert the pictures you choose to formatta and send them as a post. |

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
