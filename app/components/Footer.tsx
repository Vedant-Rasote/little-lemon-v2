'use client';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import { useLenis } from '@studio-freight/react-lenis'

const Footer = () => {
  const lenis = useLenis();
  const handleScroll = (section: string, offset: number) => {
    lenis.scrollTo(section, { offset });
  };
  return (
    <footer>
      <div className="container">
        <div className="border-y-2 border-white mx-auto grid grid-cols-1 gap-x-8 gap-y-8 py-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col lg:border-r">
            <h1 className='text-5xl mb-4'>Little Lemon</h1>
            <div className="flex items-center">
              <svg
                width="50"
                viewBox="0 0 1362 1588"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M669.932 244.268C636.28 254.859 569.659 290.22 569.317 297.394C569.146 300.469 572.563 299.957 598.186 292.953C636.792 282.703 783.189 283.557 793.78 294.149C794.463 295.003 772.598 295.515 745.095 295.515C681.89 295.515 586.229 299.786 586.229 302.69C586.229 303.715 598.87 317.039 614.073 332.072C701.706 417.825 704.61 420.9 714.176 441.399C719.471 452.674 725.108 468.731 726.646 477.272C734.504 520.149 737.066 542.527 736.725 562.855C736.383 575.155 737.92 592.92 739.97 602.145C745.949 628.794 738.433 644.68 719.642 644.68C710.93 644.68 675.74 629.477 642.6 611.37C638.842 609.32 615.781 597.874 591.353 586.087C541.985 562.001 526.953 549.531 507.137 515.879C479.976 470.439 481.855 397.156 511.066 349.837C516.703 340.784 521.315 332.242 521.315 330.876C521.315 329.68 525.244 322.676 530.198 315.502C544.548 294.319 532.419 294.319 506.966 315.502C483.563 335.146 474.851 354.108 472.631 390.152C471.435 410.992 471.777 416.459 473.656 407.234C475.193 399.718 476.56 386.394 476.73 377.852C477.072 354.108 466.823 425.394 476.73 435.302C477.926 436.669 485.733 392.425 479.754 399.429C477.875 401.65 461.807 434.448 456.683 455.801C440.625 520.373 478.473 531.391 532.59 555.168C541.814 564.222 583.666 587.283 636.109 612.224C640.038 614.103 656.95 622.302 673.52 630.331C690.26 638.36 707.343 645.876 711.613 646.901C855.139 805.564 937.784 733.989 930.61 715.881C928.731 711.098 904.507 688.549 903.824 669.759C903.141 650.968 886.656 659.029 884.606 646.901C882.557 634.602 832.164 585.628 830.797 576.232C824.647 537.626 778.781 433.594 686.024 345.619L589.133 304.056L703.96 387.898C733.171 386.532 748.631 339.213 779.55 339.213C812.177 339.384 808.3 345.619 808.3 296.028C808.3 283.557 846.171 353.306 844.89 294.149C846.171 277.717 848.38 297.245 825.672 294.149C797.486 290.305 728.303 305.903 812.86 336.651C823.281 340.409 833.616 321.875 844.89 325.12C835.922 305.594 589.133 292.611 589.133 304.056C589.133 324.385 786.093 340.238 715.372 352.025V380.244L812.86 596.731C821.402 603.906 869.284 628.393 874.579 630.784C880.046 633.005 891.952 888.414 897.418 892.684C903.055 897.126 971.979 897.467 980.35 902.934C1003.41 917.625 864.159 490.767 874.579 506.825C879.533 514.683 869.967 692.478 874.579 695.382C879.192 698.457 758.965 752.983 762.894 760.841C766.823 768.87 976.168 841.522 979.414 845.281C982.83 849.039 951.74 719.981 953.79 726.131C956.011 732.28 952.594 823.5 956.352 828.625C968.31 845.366 969.164 803.172 969.164 823.5C969.164 829.479 848.814 761.15 851.206 769.691C858.039 793.777 990.74 865.898 981.174 917.999C978.27 933.886 971.214 957.256 969.164 969.555C966.944 981.684 953.961 986.04 951.228 991.335C948.665 996.631 955.208 1021.69 951.621 1035.18C942.567 1069.01 926.852 1112.06 918.481 1126.4C914.552 1132.9 908.915 1146.56 906.011 1156.47C903.107 1166.55 947.055 1064.91 948.665 1052.83C948.248 1031.05 990.055 931.12 983.649 902.934C960.588 890.122 738.628 644.356 724.449 647.089C701.388 645.808 674.336 624.917 624.517 605.699C606.434 603.137 539.764 554.485 532.59 552.093C525.586 549.873 462.491 494.92 456.683 491.674C450.875 488.258 499.911 587.283 492.566 586.087C458.059 579.938 486.638 657.15 486.638 646.901C486.638 705.632 536.03 672.833 522.023 662.071C508.015 651.31 439.32 562.139 444.957 672.321C443.932 669.417 460.526 644.733 432.34 614.668C423.628 605.272 415.087 597.874 411.841 590.87C408.596 583.867 386.877 633.885 386.877 633.885C386.877 633.885 384.947 635.167 381.103 654.384C378.028 669.759 390.637 652.629 374.697 677.446C363.176 695.382 372.357 782.877 370.307 724.968C369.111 688.24 460.792 640.633 469.504 630.042C471.725 627.479 534.588 670.613 538.688 656.947C542.788 643.452 508.879 577.77 514.346 571.107C522.887 560.175 493.847 494.237 488.303 480.143C482.316 458.363 456.573 458.823 465.114 441.912C467.848 436.616 473.348 410.362 473.348 407.116C473.348 400.796 453.328 452.674 453.157 459.507C452.986 461.898 450.765 467.194 448.203 471.464C445.47 475.564 438.637 492.646 432.658 509.387C426.85 525.957 417.625 545.26 412.33 552.093C406.863 558.926 399.689 573.788 396.443 585.062C393.198 596.166 387.902 610.686 384.656 617.348C368.257 649.976 364.157 687.045 368.77 764.257C371.845 813.455 379.702 859.065 392.514 899.721C395.418 908.775 399.518 923.807 401.568 933.032C406.009 951.993 416.942 972.321 437.441 999.653C445.128 1009.9 455.89 1026.3 461.527 1036.38C483.393 1075.16 589.133 1180.56 623.468 1197.98C642.942 1207.89 697.093 1227.36 713.151 1230.27C719.984 1231.46 727.5 1234.71 729.721 1237.61C732.112 1240.34 736.554 1242.57 739.629 1242.57C747.486 1242.57 770.548 1255.38 780.968 1265.46C834.777 1318.07 876.629 1312.95 876.117 1253.67C875.775 1231.29 887.22 1193.54 897.641 1182.44C901.228 1178.34 907.036 1165.87 910.452 1154.76C913.869 1143.49 920.702 1128.28 925.656 1120.94C930.61 1113.76 934.709 1104.71 934.709 1100.78C934.88 1097.02 937.955 1087.29 941.542 1079.09C945.3 1070.89 950.767 1054.66 953.671 1043.21C956.575 1031.6 961.7 1015.2 965.287 1006.83C968.703 998.287 974.17 976.763 977.245 958.997C980.319 941.06 984.59 918.853 986.469 909.458C993.131 877.001 996.548 783.39 991.765 764.257C990.056 757.595 987.494 742.05 985.957 729.58C984.248 717.11 978.953 695.586 973.828 681.749C968.874 667.912 962.554 648.438 959.65 638.36C956.917 628.452 950.254 613.078 944.617 604.366C939.151 595.824 934.709 587.112 934.539 585.062C934.026 563.197 848.273 466.34 801.125 434.566C788.655 426.196 776.526 416.971 774.306 414.238C772.085 411.676 766.106 408.43 761.152 407.405C756.028 406.209 745.778 400.23 738.433 393.91L724.938 382.636L748.17 378.536C818.72 366.236 897.128 327.801 897.128 305.594C897.128 289.536 885.171 279.799 853.397 270.404C836.998 265.45 813.766 257.763 801.467 253.322C757.736 236.922 704.268 233.335 669.932 244.268Z" fill="white" />
                <path d="M553.089 309.874C548.989 311.582 543.523 316.536 540.96 320.807C538.398 325.077 531.052 337.035 524.903 347.455C510.895 370.687 495.863 428.426 498.596 448.242C504.062 487.36 505.941 493.852 518.924 513.155C541.473 547.149 546.597 550.736 629.105 591.734C722.888 638.199 738.433 641.103 729.55 610.183C727.841 603.863 726.133 586.268 725.962 571.235C725.45 488.215 708.538 439.871 665.832 398.361C609.631 343.697 577.346 313.974 570.171 310.386C561.801 305.945 562.997 305.945 553.089 309.874ZM601.456 412.25C651.422 508.339 655.095 508.51 662.953 526.276C674.484 548.056 670.64 541.65 678.327 553.18C678.498 569.58 681.744 560.441 683.452 564.711C690.456 583.502 706.171 573.936 678.327 559.586C668.59 554.632 688.577 567.273 683.452 564.711C678.327 562.149 687.295 570.007 682.171 567.273C677.046 564.54 671.921 557.024 655.266 542.931C601.456 462.216 612.987 487.84 561.74 363.565C586.082 371.252 563.021 364.846 601.456 412.25Z" fill="white" />
                <path d="M560.479 363.555C560.479 396.866 629.977 521.174 664.995 553.972C685.836 573.446 689.423 572.25 676.612 550.043C667.045 533.132 648.596 498.796 622.631 448.574C614.432 432.858 604.695 415.605 600.936 410.138C597.008 404.843 590.687 394.251 586.758 386.735C574.971 364.357 560.479 354.16 560.479 363.555ZM590.004 398.693C597.52 410.821 607.599 429.27 612.552 439.691C617.506 449.94 627.756 468.389 635.101 480.689C642.618 492.817 651.5 509.216 654.746 517.074C658.163 524.761 664.825 537.573 669.779 545.431C677.636 557.73 677.978 559.268 672.17 556.193C651.159 544.919 600.936 459.506 573.946 389.298C560.793 354.791 564.38 356.841 590.004 398.693Z" fill="white" />
                <path d="M18 18H1344" stroke="white" strokeWidth="36" strokeLinecap="round" />
                <path d="M1344 1344V18" stroke="white" strokeWidth="36" strokeLinecap="round" />
                <path d="M18 1570L18 244" stroke="white" strokeWidth="36" strokeLinecap="round" />
                <path d="M18 1570H1344" stroke="white" strokeWidth="36" strokeLinecap="round" />
              </svg>
              <div className='ml-3'>
                <div className='ml-3'>
                  <p>
                    Questions?{" "}
                    <a href='mailto:info@ll.com' className='hover-accent'>
                      info@ll.com
                    </a>
                  </p>
                  <p>
                    Or call?{" "}
                    <a href='tel:+911234567890' className='hover-accent'>
                      +91 1234567890
                    </a>
                  </p>
                </div>

              </div>
            </div>
          </div>
          <div className='lg:border-r'>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className='py-3'>Navigation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link key={1} href='#about' className='hidden md:inline-block hover-accent' onClick={() => handleScroll('#about', -200)}>
                      <p>About</p>
                    </Link>
                  </td>
                  <td>
                    <Link key={2} href='#about' className='hidden md:inline-block hover-accent' onClick={() => handleScroll('#gallery', -200)}>
                      <p>Gallery</p>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link key={3} href='#about' className='hidden md:inline-block hover-accent' onClick={() => handleScroll('#menu', -200)}>
                      <p>Menu</p>
                    </Link>
                  </td>
                  <td>
                    <Link key={4} href='#about' className='hidden md:inline-block hover-accent' onClick={() => handleScroll('#testimonials', -200)}>
                      <p>Testimonials</p>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link key={5} href='#about' className='hidden md:inline-block hover-accent' onClick={() => handleScroll('#contact', -200)}>
                      <p>Contact</p>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='min-w-5'>
            <p className='py-3 font-semibold'>Folluw us</p>
            <Instagram size={40} strokeWidth={1.75} absoluteStrokeWidth className='border-y-2 border-l-2 border-r p-2 transition-transform hover:transform hover:scale-95 hover:border-opacity-70 inline-block' />
            <Facebook size={40} strokeWidth={1.75} absoluteStrokeWidth className='border-y-2 border-x p-2 transition-transform hover:transform hover:scale-95 hover:border-opacity-70 inline-block' />
            <Youtube size={40} strokeWidth={1.75} absoluteStrokeWidth className='border-y-2 border-r-2 border-l p-2 transition-transform hover:transform hover:scale-95 hover:border-opacity-70 inline-block' />
          </div>
        </div>
        <div className="flex flex-wrap py-5 justify-between items-center">
          <span>Copyright (C) 2024 - Little Lemon</span>
          <Link key={4} href='#about' className='hidden md:inline-block hover-accent' onClick={() => handleScroll('#hero', -200)}>
            <p>Back to Top</p>
          </Link>
        </div>
      </div>
    </footer >
  )
}

export default Footer