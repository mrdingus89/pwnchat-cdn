document.documentElement.innerHTML = `
  <head>
    <title>PwnChat</title>
    <style>
      html, body {
        background-color: #000000 !important;
        color: #ffffff !important;
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <b>Injecting Payload...</b>
  </body>
`;

const iframe = document.createElement("iframe");
iframe.src = "https://guileless-biscotti-f6edfe.netlify.app/";

Object.assign(iframe.style, {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  border: "none",
  zIndex: "999999"
});

document.body.appendChild(iframe);
