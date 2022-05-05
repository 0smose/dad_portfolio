import { Nav } from 'react-bootstrap';
import NavigationArrow from '../../../components/NavigationArrow/NavigationArrow';
import { useEffect } from 'react';

const Bazar = () => {


useEffect(() => {
  const path = document.querySelectorAll('#draw-line path ');
  console.log(path.length);

  for (let i = 0; i < path.length; i++) {
    console.log(`letter ${i} is ${path[i].getTotalLength()}`)
  }
}, [])

  return ( 

  <div>
    
    <NavigationArrow />  
    <div className="banner" id="bazar-banner">

      <h2 className="banner-position bazar" id="bazar-svg">
        BAZAR
      </h2>
    {/* <svg className="banner-position" id="bazar-svg" width="598" height="147" viewBox="0 0 598 147" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.34064 9.39998C20.5406 4.33332 37.274 1.79998 51.5406 1.79998C82.074 1.79998 97.3406 12.4 97.3406 33.6C97.3406 46.5333 91.274 56.4 79.1406 63.2C87.274 65.2 94.0073 69.0667 99.3406 74.8C104.674 80.4 107.341 87.4667 107.341 96C107.341 112 101.407 124.4 89.5406 133.2C77.674 141.867 63.0073 146.2 45.5406 146.2C28.074 146.2 12.9406 142.733 0.140625 135.8C4.27396 121.4 6.34064 102 6.34064 77.6C6.34064 53.0667 4.67397 30.3333 1.34064 9.39998ZM31.5406 124.6C37.4073 126.467 43.274 127.4 49.1406 127.4C58.3406 127.4 65.9406 125.133 71.9406 120.6C77.9406 115.933 80.9406 109.4 80.9406 101C80.9406 85 72.274 77 54.9406 77C46.674 77 38.274 78.7333 29.7406 82.2C29.7406 95.6666 30.3406 109.8 31.5406 124.6ZM29.5406 64.6C31.4073 64.2 34.1406 63.7333 37.7406 63.2C41.474 62.6667 44.3406 62.2 46.3406 61.8C48.3406 61.4 50.8073 60.8 53.7406 60C56.8073 59.2 59.1406 58.2667 60.7406 57.2C62.474 56 64.2073 54.5333 65.9406 52.8C69.274 49.4666 70.9406 44.6 70.9406 38.2C70.9406 25.8 63.5406 19.6 48.7406 19.6C43.9406 19.6 38.074 20.4 31.1406 22C30.074 49.3333 29.5406 63.5333 29.5406 64.6Z" fill="#D228C1"/>
      <path d="M160.089 4.59998C165.689 2.73332 170.756 1.79998 175.289 1.79998C182.222 1.79998 187.622 4.26665 191.489 9.19999C195.356 14 198.356 20.8667 200.489 29.8C201.156 32.4666 202.489 38.3333 204.489 47.4C206.622 56.4667 208.356 63.8 209.689 69.4C213.822 86.8666 217.556 100.4 220.889 110C224.356 119.6 229.822 127.267 237.289 133C235.689 137 233.022 140.2 229.289 142.6C225.689 145 221.756 146.2 217.489 146.2C207.756 146.2 200.622 138.867 196.089 124.2C193.956 117.4 192.022 110.733 190.289 104.2C185.622 105.8 179.822 106.6 172.889 106.6C166.089 106.6 157.689 105.867 147.689 104.4C143.556 120.533 141.489 132.667 141.489 140.8C141.489 142.533 141.556 143.8 141.689 144.6C139.956 144.867 137.022 145 132.889 145C128.756 145 125.089 143.733 121.889 141.2C118.822 138.533 117.289 134.8 117.289 130C117.289 123.333 123.689 103.8 136.489 71.4C149.289 39 157.156 16.7333 160.089 4.59998ZM152.289 87.6C157.622 88.2667 163.022 88.6 168.489 88.6C174.089 88.6 180.022 88 186.289 86.8C185.089 81.3333 181.022 60.4 174.089 24C165.822 45.4667 158.556 66.6667 152.289 87.6Z" fill="#D228C1"/>
      <path d="M289.136 4.59998L328.136 2.99998C332.003 2.99998 335.336 3.99998 338.136 5.99998C340.936 7.99998 342.336 11 342.336 15C342.336 18.8666 339.336 25.3333 333.336 34.4C327.469 43.4667 320.736 52.6666 313.136 62C305.669 71.3333 297.936 82 289.936 94C281.936 106 276.336 116.467 273.136 125.4C281.936 125.933 288.736 126.2 293.536 126.2C311.136 126.2 326.603 123.267 339.936 117.4C341.536 121 342.336 125.067 342.336 129.6C342.336 134.133 340.736 138.067 337.536 141.4C334.469 144.6 330.669 146.2 326.136 146.2L246.936 145C244.536 141.4 243.336 136.867 243.336 131.4C243.336 125.8 248.203 115.867 257.936 101.6C267.803 87.3333 278.869 71.9333 291.136 55.4C303.536 38.8666 311.403 27.3333 314.736 20.8C311.136 21.3333 305.469 22.3333 297.736 23.8C281.869 26.6 270.803 28 264.536 28C251.869 28 245.536 23.7333 245.536 15.2C245.536 9.46665 246.336 4.59998 247.936 0.599976C260.336 3.26665 274.069 4.59998 289.136 4.59998Z" fill="#D228C1"/>
      <path d="M394.073 4.59998C399.673 2.73332 404.74 1.79998 409.273 1.79998C416.207 1.79998 421.607 4.26665 425.473 9.19999C429.34 14 432.34 20.8667 434.473 29.8C435.14 32.4666 436.473 38.3333 438.473 47.4C440.607 56.4667 442.34 63.8 443.673 69.4C447.807 86.8666 451.54 100.4 454.873 110C458.34 119.6 463.807 127.267 471.273 133C469.673 137 467.007 140.2 463.273 142.6C459.673 145 455.74 146.2 451.473 146.2C441.74 146.2 434.607 138.867 430.073 124.2C427.94 117.4 426.007 110.733 424.273 104.2C419.607 105.8 413.807 106.6 406.873 106.6C400.073 106.6 391.673 105.867 381.673 104.4C377.54 120.533 375.473 132.667 375.473 140.8C375.473 142.533 375.54 143.8 375.673 144.6C373.94 144.867 371.007 145 366.873 145C362.74 145 359.073 143.733 355.873 141.2C352.807 138.533 351.273 134.8 351.273 130C351.273 123.333 357.673 103.8 370.473 71.4C383.273 39 391.14 16.7333 394.073 4.59998ZM386.273 87.6C391.607 88.2667 397.007 88.6 402.473 88.6C408.073 88.6 414.007 88 420.273 86.8C419.073 81.3333 415.007 60.4 408.073 24C399.807 45.4667 392.54 66.6667 386.273 87.6Z" fill="#D228C1"/>
      <path d="M547.72 77C553.72 89.6667 561.32 100.733 570.52 110.2C579.72 119.667 588.854 125.8 597.92 128.6C597.92 134.2 596.454 138.533 593.52 141.6C590.587 144.667 586.387 146.2 580.92 146.2C573.854 146.2 565.787 141.667 556.72 132.6C547.654 123.4 539.72 112.6 532.92 100.2C526.254 87.6666 522.32 76.6666 521.12 67.2C530.72 67.2 538.587 64.6667 544.72 59.6C550.987 54.4 554.12 47.0667 554.12 37.6C554.12 25.6 546.654 19.6 531.72 19.6C526.92 19.6 521.054 20.4 514.12 22C513.187 40 512.72 54.5333 512.72 65.6C512.72 101.067 514.12 126.733 516.92 142.6C512.654 144.2 508.12 145 503.32 145C498.52 145 494.32 143.467 490.72 140.4C487.254 137.333 485.52 133.267 485.52 128.2C485.52 123.133 486.187 114.333 487.52 101.8C488.854 89.1333 489.52 79 489.52 71.4C489.52 48.0666 487.854 27.3333 484.52 9.19999C502.52 4.26665 519.654 1.79998 535.92 1.79998C565.654 1.79998 580.52 12.4 580.52 33.6C580.52 42.9333 577.32 51.7333 570.92 60C564.654 68.1333 556.92 73.8 547.72 77Z" fill="#D228C1"/>
    </svg> */}

    {/* <svg className="" id="draw-line" viewBox="0 0 1440 366" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1321.42 111.36C1235.54 38.3607 1095.88 -10.1523 880.839 3.93482C667.483 17.9116 379.957 93.5105 -2.79263 267.913L-3.20728 267.003C379.604 92.5724 667.254 16.9245 880.774 2.93696C1095.99 -11.1615 1235.93 37.3811 1322.07 110.598C1408.22 183.814 1440.5 281.65 1440.5 366H1439.5C1439.5 281.898 1407.31 184.358 1321.42 111.36Z"/>
    </svg> */}


      <svg id="draw-line" viewBox="0 0 1440 529" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="473.5" x2="1440" y2="473.5" stroke="black"/>
        <rect x="537.5" y="348.5" width="360" height="125" stroke="black"/>
        <rect x="340.5" y="174.5" width="128" height="299" stroke="black"/>
        <rect x="965.5" y="174.5" width="128" height="299" stroke="black"/>
        <mask id="path-5-outside-1_8_104" maskUnits="userSpaceOnUse" x="536" y="188" width="363" height="161" fill="black">
        <rect fill="white" x="536" y="188" width="363" height="161"/>
        <path d="M898 348C898 305.831 878.983 265.388 845.133 235.57C811.282 205.752 765.372 189 717.5 189C669.628 189 623.718 205.752 589.867 235.57C556.017 265.388 537 305.831 537 348L717.5 348H898Z"/>
        </mask>
        <path d="M898 348C898 305.831 878.983 265.388 845.133 235.57C811.282 205.752 765.372 189 717.5 189C669.628 189 623.718 205.752 589.867 235.57C556.017 265.388 537 305.831 537 348L717.5 348H898Z" stroke="black" stroke-width="2" mask="url(#path-5-outside-1_8_104)"/>
        <rect x="77.5" y="263.5" width="194" height="210" stroke="black"/>
        <path d="M272 263.5H272.5V263C272.5 247.256 269.971 231.664 265.055 217.113C262.715 209.068 257.328 204.168 250.642 200.166C247.302 198.168 243.623 196.384 239.829 194.546L239.796 194.53C236.006 192.694 232.096 190.8 228.251 188.568L228.203 188.54L228.15 188.523C210.757 183.057 199.711 173.496 193.012 165.308C189.662 161.214 187.399 157.462 185.974 154.737C185.262 153.375 184.76 152.27 184.437 151.508C184.275 151.127 184.158 150.832 184.082 150.633C184.071 150.603 184.06 150.575 184.05 150.549C184.028 150.49 184.011 150.443 183.998 150.408L183.987 150.378C180.743 128.657 178.496 108.31 177.06 93.3896C176.342 85.924 175.826 79.8175 175.491 75.5777C175.323 73.4579 175.2 71.8048 175.119 70.6818C175.078 70.1204 175.048 69.6915 175.028 69.4031C175.019 69.2588 175.011 69.1498 175.006 69.0768L175.001 68.9945L175 68.9828C175 68.9456 174.999 68.9046 174.995 68.8675L174.995 68.8665C174.994 68.852 174.989 68.7994 174.97 68.7407L174.969 68.7391C174.963 68.7189 174.93 68.6153 174.833 68.5251C174.775 68.4783 174.621 68.4072 174.527 68.3913C174.432 68.3934 174.272 68.4403 174.209 68.4769C174.102 68.5495 174.053 68.6438 174.044 68.6626L174.043 68.6641C174.026 68.6968 174.016 68.7252 174.011 68.7399C174 68.7709 173.993 68.7996 173.989 68.8173C173.981 68.8557 173.973 68.9008 173.965 68.9463C173.936 69.1294 173.894 69.469 173.84 69.9435C173.731 70.8995 173.569 72.4492 173.354 74.5107C173.326 74.7839 173.296 75.0661 173.266 75.3572C172.839 79.4615 172.228 85.3267 171.441 92.445C169.754 107.688 167.256 128.673 164.008 150.408L164.008 150.409C164.005 150.421 164.001 150.439 163.995 150.464C163.984 150.513 163.965 150.588 163.94 150.687C163.889 150.885 163.809 151.179 163.694 151.559C163.465 152.319 163.097 153.421 162.545 154.781C161.44 157.5 159.599 161.245 156.657 165.333C150.776 173.504 140.488 183.058 122.852 188.522L122.825 188.531L122.798 188.543C121.515 189.109 120.231 189.669 118.954 190.226C111.792 193.35 104.803 196.399 98.9084 200.083C91.9519 204.429 86.4499 209.7 83.9481 217.103C79.0304 231.657 76.5 247.252 76.5 263L76.5 263.5H77L174.5 263.5H272ZM174.014 69.032L174.463 69.0025C174.14 69.0237 174.043 69.0302 174.014 69.0323C174.014 69.0322 174.014 69.0321 174.014 69.032Z" stroke="black"/>
        <path d="M186.5 121.5C186.5 128.68 180.68 134.5 173.5 134.5C166.32 134.5 160.5 128.68 160.5 121.5C160.5 114.32 166.32 108.5 173.5 108.5C180.68 108.5 186.5 114.32 186.5 121.5Z" fill="#FFF6A5" stroke="black"/>
        <circle cx="174" cy="91" r="5.5" fill="#FFF6A5" stroke="black"/>
        <rect x="1161.5" y="263.61" width="194" height="210" stroke="black"/>
        <path d="M1356 263.61H1356.5V263.11C1356.5 247.366 1353.97 231.774 1349.06 217.223C1346.72 209.178 1341.33 204.278 1334.64 200.276C1331.3 198.278 1327.62 196.494 1323.83 194.656L1323.8 194.64C1320.01 192.804 1316.1 190.91 1312.25 188.678L1312.2 188.65L1312.15 188.633C1294.76 183.167 1283.71 173.606 1277.01 165.418C1273.66 161.324 1271.4 157.572 1269.97 154.847C1269.26 153.485 1268.76 152.38 1268.44 151.618C1268.28 151.237 1268.16 150.942 1268.08 150.743C1268.07 150.713 1268.06 150.685 1268.05 150.659C1268.03 150.6 1268.01 150.553 1268 150.518L1267.99 150.488C1264.74 128.767 1262.5 108.42 1261.06 93.4996C1260.34 86.034 1259.83 79.9275 1259.49 75.6877C1259.32 73.5679 1259.2 71.9147 1259.12 70.7918C1259.08 70.2304 1259.05 69.8015 1259.03 69.513C1259.02 69.3688 1259.01 69.2597 1259.01 69.1868L1259 69.1045L1259 69.0928C1259 69.0556 1259 69.0146 1259 68.9775L1259 68.9765C1258.99 68.9619 1258.99 68.9094 1258.97 68.8507L1258.97 68.8491C1258.96 68.8289 1258.93 68.7252 1258.83 68.6351C1258.78 68.5883 1258.62 68.5172 1258.53 68.5013C1258.43 68.5034 1258.27 68.5503 1258.21 68.5869C1258.1 68.6595 1258.05 68.7538 1258.04 68.7726L1258.04 68.7741C1258.03 68.8068 1258.02 68.8351 1258.01 68.8499C1258 68.8809 1257.99 68.9096 1257.99 68.9273C1257.98 68.9656 1257.97 69.0108 1257.97 69.0563C1257.94 69.2394 1257.89 69.579 1257.84 70.0535C1257.73 71.0095 1257.57 72.5592 1257.35 74.6207C1257.33 74.8939 1257.3 75.1761 1257.27 75.4671C1256.84 79.5715 1256.23 85.4367 1255.44 92.555C1253.75 107.798 1251.26 128.783 1248.01 150.518L1248.01 150.519C1248.01 150.531 1248 150.549 1248 150.574C1247.98 150.623 1247.97 150.698 1247.94 150.797C1247.89 150.995 1247.81 151.289 1247.69 151.669C1247.46 152.429 1247.1 153.531 1246.54 154.891C1245.44 157.61 1243.6 161.355 1240.66 165.443C1234.78 173.614 1224.49 183.168 1206.85 188.632L1206.82 188.641L1206.8 188.653C1205.51 189.219 1204.23 189.779 1202.95 190.336C1195.79 193.46 1188.8 196.509 1182.91 200.193C1175.95 204.539 1170.45 209.81 1167.95 217.213C1163.03 231.767 1160.5 247.362 1160.5 263.11L1160.5 263.61H1161L1258.5 263.61H1356ZM1258.01 69.142L1258.46 69.1125C1258.14 69.1337 1258.04 69.1402 1258.01 69.1423C1258.01 69.1422 1258.01 69.1421 1258.01 69.142Z" stroke="black"/>
        <path d="M1270.5 121.61C1270.5 128.79 1264.68 134.61 1257.5 134.61C1250.32 134.61 1244.5 128.79 1244.5 121.61C1244.5 114.43 1250.32 108.61 1257.5 108.61C1264.68 108.61 1270.5 114.43 1270.5 121.61Z" fill="#FFF6A5" stroke="black"/>
        <circle cx="1258" cy="91.11" r="5.5" fill="#FFF6A5" stroke="black"/>
        <mask id="path-14-outside-2_8_104" maskUnits="userSpaceOnUse" x="328" y="68" width="154" height="107" fill="black">
        <rect fill="white" x="328" y="68" width="154" height="107"/>
        <path d="M481 174C481 146.152 472.993 119.445 458.74 99.7538C444.487 80.0625 425.156 69 405 69C384.844 69 365.513 80.0625 351.26 99.7538C337.007 119.445 329 146.152 329 174L405 174H481Z"/>
        </mask>
        <path d="M481 174C481 146.152 472.993 119.445 458.74 99.7538C444.487 80.0625 425.156 69 405 69C384.844 69 365.513 80.0625 351.26 99.7538C337.007 119.445 329 146.152 329 174L405 174H481Z" stroke="black" stroke-width="2" mask="url(#path-14-outside-2_8_104)"/>
        <path d="M397.695 68.5L404.5 4.71332L411.305 68.5H397.695Z" stroke="black"/>
        <circle cx="404.5" cy="47.5" r="12" fill="#FFF6A5" stroke="black"/>
        <circle cx="404.5" cy="21.5" r="6" fill="#FFF6A5" stroke="black"/>
        <mask id="path-18-outside-3_8_104" maskUnits="userSpaceOnUse" x="953" y="68" width="154" height="107" fill="black">
        <rect fill="white" x="953" y="68" width="154" height="107"/>
        <path d="M1106 174C1106 146.152 1097.99 119.445 1083.74 99.7538C1069.49 80.0625 1050.16 69 1030 69C1009.84 69 990.513 80.0625 976.26 99.7538C962.007 119.445 954 146.152 954 174L1030 174H1106Z"/>
        </mask>
        <path d="M1106 174C1106 146.152 1097.99 119.445 1083.74 99.7538C1069.49 80.0625 1050.16 69 1030 69C1009.84 69 990.513 80.0625 976.26 99.7538C962.007 119.445 954 146.152 954 174L1030 174H1106Z" stroke="black" stroke-width="2" mask="url(#path-18-outside-3_8_104)"/>
        <path d="M1022.69 68.5L1029.5 4.71332L1036.31 68.5H1022.69Z" stroke="black"/>
        <circle cx="1029.5" cy="47.5" r="12" fill="#FFF6A5" stroke="black"/>
        <circle cx="1029.5" cy="21.5" r="6" fill="#FFF6A5" stroke="black"/>
        <rect x="200.5" y="292.5" width="44" height="55" stroke="black"/>
        <rect x="102.5" y="292.5" width="44" height="55" stroke="black"/>
        <rect x="151.5" y="383.5" width="44" height="55" stroke="black"/>
        <mask id="path-25-inside-4_8_104" fill="white">
        <path d="M457 408.5C457 380.254 454.577 353.166 450.263 333.193C445.95 313.221 440.1 302 434 302C427.9 302 422.05 313.22 417.737 333.193C413.423 353.166 411 380.254 411 408.5L434 408.5H457Z"/>
        </mask>
        <path d="M457 408.5C457 380.254 454.577 353.166 450.263 333.193C445.95 313.221 440.1 302 434 302C427.9 302 422.05 313.22 417.737 333.193C413.423 353.166 411 380.254 411 408.5L434 408.5H457Z" stroke="black" stroke-width="2" mask="url(#path-25-inside-4_8_104)"/>
        <mask id="path-26-inside-5_8_104" fill="white">
        <path d="M1021 364.5C1021 341.824 1018.58 320.077 1014.26 304.042C1009.95 288.008 1004.1 279 998 279C991.9 279 986.05 288.008 981.737 304.042C977.423 320.077 975 341.824 975 364.5L998 364.5H1021Z"/>
        </mask>
        <path d="M1021 364.5C1021 341.824 1018.58 320.077 1014.26 304.042C1009.95 288.008 1004.1 279 998 279C991.9 279 986.05 288.008 981.737 304.042C977.423 320.077 975 341.824 975 364.5L998 364.5H1021Z" stroke="black" stroke-width="2" mask="url(#path-26-inside-5_8_104)"/>
        <mask id="path-27-inside-6_8_104" fill="white">
        <path d="M401 301.5C401 273.254 398.577 246.166 394.263 226.193C389.95 206.221 384.1 195 378 195C371.9 195 366.05 206.22 361.737 226.193C357.423 246.166 355 273.254 355 301.5L378 301.5H401Z"/>
        </mask>
        <path d="M401 301.5C401 273.254 398.577 246.166 394.263 226.193C389.95 206.221 384.1 195 378 195C371.9 195 366.05 206.22 361.737 226.193C357.423 246.166 355 273.254 355 301.5L378 301.5H401Z" stroke="black" stroke-width="2" mask="url(#path-27-inside-6_8_104)"/>
        <mask id="path-28-inside-7_8_104" fill="white">
        <path d="M1082 263C1082 243.374 1079.58 224.552 1075.26 210.674C1070.95 196.796 1065.1 189 1059 189C1052.9 189 1047.05 196.796 1042.74 210.674C1038.42 224.552 1036 243.374 1036 263L1059 263H1082Z"/>
        </mask>
        <path d="M1082 263C1082 243.374 1079.58 224.552 1075.26 210.674C1070.95 196.796 1065.1 189 1059 189C1052.9 189 1047.05 196.796 1042.74 210.674C1038.42 224.552 1036 243.374 1036 263L1059 263H1082Z" stroke="black" stroke-width="2" mask="url(#path-28-inside-7_8_104)"/>
        <mask id="path-29-inside-8_8_104" fill="white">
        <path d="M1082 455C1082 435.374 1079.58 416.552 1075.26 402.674C1070.95 388.796 1065.1 381 1059 381C1052.9 381 1047.05 388.796 1042.74 402.674C1038.42 416.552 1036 435.374 1036 455L1059 455H1082Z"/>
        </mask>
        <path d="M1082 455C1082 435.374 1079.58 416.552 1075.26 402.674C1070.95 388.796 1065.1 381 1059 381C1052.9 381 1047.05 388.796 1042.74 402.674C1038.42 416.552 1036 435.374 1036 455L1059 455H1082Z" stroke="black" stroke-width="2" mask="url(#path-29-inside-8_8_104)"/>
        <rect x="1187.5" y="350.5" width="56" height="92" stroke="black"/>
        <rect x="1271.5" y="288.5" width="56" height="92" stroke="black"/>
        <mask id="path-32-inside-9_8_104" fill="white">
        <path d="M757 419C757 408.922 752.838 399.256 745.431 392.13C738.023 385.004 727.976 381 717.5 381C707.024 381 696.977 385.004 689.569 392.13C682.162 399.256 678 408.922 678 419L717.5 419H757Z"/>
        </mask>
        <path d="M757 419C757 408.922 752.838 399.256 745.431 392.13C738.023 385.004 727.976 381 717.5 381C707.024 381 696.977 385.004 689.569 392.13C682.162 399.256 678 408.922 678 419L717.5 419H757Z" stroke="black" stroke-width="2" mask="url(#path-32-inside-9_8_104)"/>
        <mask id="path-33-inside-10_8_104" fill="white">
        <path d="M648 419C648 408.922 643.838 399.256 636.431 392.13C629.023 385.004 618.976 381 608.5 381C598.024 381 587.977 385.004 580.569 392.13C573.162 399.256 569 408.922 569 419L608.5 419H648Z"/>
        </mask>
        <path d="M648 419C648 408.922 643.838 399.256 636.431 392.13C629.023 385.004 618.976 381 608.5 381C598.024 381 587.977 385.004 580.569 392.13C573.162 399.256 569 408.922 569 419L608.5 419H648Z" stroke="black" stroke-width="2" mask="url(#path-33-inside-10_8_104)"/>
        <mask id="path-34-inside-11_8_104" fill="white">
        <path d="M866 419C866 408.922 861.838 399.256 854.431 392.13C847.023 385.004 836.976 381 826.5 381C816.024 381 805.977 385.004 798.569 392.13C791.162 399.256 787 408.922 787 419L826.5 419H866Z"/>
        </mask>
        <path d="M866 419C866 408.922 861.838 399.256 854.431 392.13C847.023 385.004 836.976 381 826.5 381C816.024 381 805.977 385.004 798.569 392.13C791.162 399.256 787 408.922 787 419L826.5 419H866Z" stroke="black" stroke-width="2" mask="url(#path-34-inside-11_8_104)"/>
      </svg>


    
    
    </div>

    <div className="wrapper-youtube">

        {/* <h2 className="title" id="bazar">Bazar</h2>   */}
   
        <div className="youtube-video mb-5">

          <iframe className='video-format' src="https://www.youtube.com/embed/Dn999h5D330" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
          
        </div>
         
        <div className="youtube-video mb-5">

          <iframe className='video-format' frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x1a088x" allowfullscreen="true" > </iframe>
 
         </div>
      
    </div>

    <div className="soundcloud">

      <iframe width="600px" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/78060411&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      
      <iframe width="600px" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/26236703&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

      <iframe width="600px" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/138886811&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>  

      <iframe width="600px" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/138886804&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

      <iframe width="600px" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/138886801&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

      <iframe width="600px" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/138886799&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

      <iframe width="600px" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/138886796&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

      <iframe width="600px" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/138886794&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

    </div>

  </div>

   );

}
 
export default Bazar;