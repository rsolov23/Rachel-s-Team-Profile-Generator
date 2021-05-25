const generatePage = (data) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <style>
          body {background-color: #2B7C85;}
          .card-content {background-color: #175873;}
        
          </style>
        <title>Team Profile Generator</title>
      </head>
      <body>
        <nav style="background-color: #0C1446">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo center">My Team</a>
          </div>
        </nav>
<div class="container" stye="display:flex;">
        <div class="row">
        ${data
          .map((data) => {
            return `
        <div class="col s3">
          <div class="card cyan darken-3">
            <div class="card-content white-text">
              <span class="card-title">${data.name}</span>
              <span class="card-title">

              <p>
                <span class="material-icons md-18">
                    ${
                      data.role === "Manager"
                        ? "business_center"
                        : data.role === "Intern"
                        ? "accessibility_new"
                        : "engineering"
                    }
                    </span>${data.role}</span>

              </p>
            </div>

            <div class="card-content white">
                      <p>ID: ${data.id}</p>

                      <p>Email: <a href="mailto:${data.email}">${
              data.email
            }</a></p>

                      <p>${
                        data.role === "Manager"
                          ? "Office Number: " + data.officeNumber
                          : data.role === "Intern"
                          ? "School: " + data.school
                          : `GitHub:
                      <a href="https://github.com/${data.githubUserName}" target="blank">` +
                            data.githubUserName +
                            "</a>"
                      }
                      </p>
                    </div>
                  </div>
                </div>
                `;
          })
          .join("")}

            </div>
        </div>
    </body>
    </html>
    `;
};

module.exports = generatePage;
