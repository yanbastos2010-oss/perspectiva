const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const target = `.carousel-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: transparent !important;
        color: #2563eb !important;
        border: none;
        width: 3rem;
        height: 3rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        transition: transform 0.2s, color 0.2s;
        box-shadow: none !important;
      }
      .carousel-btn svg {
        width: 40px;
        height: 40px;
        filter: drop-shadow(0px 2px 4px rgba(255,255,255,0.8));
      }
      .carousel-btn:hover {
        background-color: transparent !important;
        color: #1d4ed8 !important;
        transform: translateY(-50%) scale(1.1);
      }`;

const replacement = `.carousel-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: #2563eb !important;
        color: #ffffff !important;
        border: none;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        transition: transform 0.2s, background-color 0.2s;
        box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3) !important;
      }
      .carousel-btn svg {
        width: 24px;
        height: 24px;
        filter: none;
      }
      .carousel-btn:hover {
        background-color: #1d4ed8 !important;
        color: #ffffff !important;
        transform: translateY(-50%) scale(1.1);
      }`;

html = html.replace(target, replacement);
fs.writeFileSync('index.html', html);
