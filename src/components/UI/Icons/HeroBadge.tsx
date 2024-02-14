import Link from "next/link";
import React from "react";

const HeroBadge = () => {
  return (
    <svg
      width="194"
      height="89"
      viewBox="0 0 194 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="187"
        cy="82"
        r="5"
        className="dark:fill-[#111] fill-[#D9D9D9]"
      />
      <circle cx="187" cy="82" r="6.5" stroke="#D9D9D9" />
      <path d="M187 75V31H86" stroke="#D9D9D9" />
      <Link href="/products">
        <rect
          y="13"
          width="86"
          height="34"
          rx="2"
          className="fill-[#111] dark:fill-[#D9D9D9]"
        />
        <path
          d="M10.352 21.147H11.837L13.982 25.47L13.894 21.147H15.126H15.225V21.257C15.1883 21.301 15.1627 21.3487 15.148 21.4C15.1407 21.4513 15.137 21.5393 15.137 21.664V28H13.806L11.606 23.391V28H10.352V21.147ZM19.57 26.537H16.831L17.007 25.558H19.361L19.57 26.537ZM18.261 23.6L17.007 28H15.621L17.876 21.125H18.635L20.89 28H19.482L18.261 23.6ZM23.035 28V22.313H21.231V21.147H26.28V22.313H24.366V28H23.035ZM29.239 28.143C28.4837 28.143 27.897 27.9193 27.479 27.472C27.061 27.0173 26.852 26.3903 26.852 25.591V21.147H28.238H28.337V21.257C28.3003 21.301 28.2747 21.3487 28.26 21.4C28.2527 21.4513 28.249 21.5393 28.249 21.664V25.602C28.249 26.042 28.3223 26.3903 28.469 26.647C28.6157 26.8963 28.876 27.021 29.25 27.021C29.6387 27.021 29.9063 26.8927 30.053 26.636C30.207 26.3793 30.284 26.0237 30.284 25.569V21.147H31.659V25.558C31.659 26.152 31.5563 26.6397 31.351 27.021C31.1457 27.4023 30.8597 27.6847 30.493 27.868C30.1337 28.0513 29.7157 28.143 29.239 28.143ZM32.451 28V21.147H34.673C35.2377 21.147 35.6997 21.2313 36.059 21.4C36.4257 21.5687 36.697 21.807 36.873 22.115C37.049 22.4157 37.137 22.7677 37.137 23.171C37.137 23.4277 37.0857 23.6807 36.983 23.93C36.8803 24.172 36.7337 24.3957 36.543 24.601C36.3597 24.799 36.1397 24.9493 35.883 25.052L37.324 28H35.872L34.519 25.217H33.87V28H32.451ZM33.87 24.062H34.75C35.058 24.062 35.2927 23.9887 35.454 23.842C35.6227 23.688 35.707 23.479 35.707 23.215C35.707 23.0537 35.6703 22.907 35.597 22.775C35.5237 22.643 35.4173 22.5367 35.278 22.456C35.1387 22.3753 34.9627 22.335 34.75 22.335H33.87V24.062ZM38.039 28V21.147H42.582V22.269H39.403V23.875H42.01V24.997H39.403V26.878H42.56V28H38.039ZM45.134 20.685H46.366C46.366 21.125 46.3587 21.477 46.344 21.741C46.3293 22.005 46.311 22.2287 46.289 22.412C46.2743 22.588 46.2523 22.7603 46.223 22.929C46.1937 23.0903 46.168 23.2883 46.146 23.523H45.354C45.332 23.2883 45.3063 23.0903 45.277 22.929C45.2477 22.7603 45.222 22.588 45.2 22.412C45.1853 22.236 45.1707 22.016 45.156 21.752C45.1413 21.4807 45.134 21.125 45.134 20.685ZM51.151 28.132C50.689 28.132 50.249 28.066 49.831 27.934C49.4203 27.802 49.083 27.5967 48.819 27.318L49.49 26.185L49.545 26.097L49.655 26.163C49.6697 26.2143 49.688 26.2693 49.71 26.328C49.732 26.3793 49.7907 26.4453 49.886 26.526C50.062 26.6507 50.2563 26.757 50.469 26.845C50.689 26.9257 50.92 26.9697 51.162 26.977C51.3233 26.977 51.47 26.9623 51.602 26.933C51.734 26.9037 51.8477 26.8597 51.943 26.801C52.0383 26.735 52.1117 26.6507 52.163 26.548C52.2143 26.4453 52.24 26.3243 52.24 26.185C52.24 26.1117 52.229 26.0383 52.207 25.965C52.1923 25.8843 52.1593 25.8073 52.108 25.734C52.064 25.6607 51.9907 25.5873 51.888 25.514C51.7927 25.4333 51.6717 25.349 51.525 25.261C51.3783 25.173 51.195 25.0813 50.975 24.986C50.4983 24.766 50.1207 24.5533 49.842 24.348C49.5707 24.1353 49.3763 23.908 49.259 23.666C49.1417 23.4167 49.083 23.1307 49.083 22.808C49.083 22.4707 49.1783 22.17 49.369 21.906C49.567 21.6347 49.8347 21.422 50.172 21.268C50.5093 21.1067 50.887 21.026 51.305 21.026C51.6057 21.026 51.8807 21.059 52.13 21.125C52.3867 21.191 52.625 21.29 52.845 21.422C53.065 21.554 53.2667 21.719 53.45 21.917L52.614 22.841L52.548 22.918L52.46 22.841C52.4527 22.7823 52.4417 22.7273 52.427 22.676C52.4123 22.6173 52.3647 22.544 52.284 22.456C52.152 22.3387 52.0127 22.2617 51.866 22.225C51.7193 22.181 51.5507 22.159 51.36 22.159C51.2207 22.159 51.096 22.1773 50.986 22.214C50.876 22.2433 50.7807 22.2873 50.7 22.346C50.6193 22.3973 50.557 22.4597 50.513 22.533C50.4763 22.6063 50.458 22.6833 50.458 22.764C50.458 22.8373 50.4653 22.907 50.48 22.973C50.4947 23.039 50.5277 23.105 50.579 23.171C50.6303 23.237 50.7037 23.3067 50.799 23.38C50.9017 23.446 51.03 23.523 51.184 23.611C51.3453 23.699 51.547 23.798 51.789 23.908C52.1337 24.0767 52.4233 24.2417 52.658 24.403C52.9 24.557 53.0907 24.7183 53.23 24.887C53.3767 25.0483 53.4793 25.2317 53.538 25.437C53.5967 25.635 53.626 25.8587 53.626 26.108C53.626 26.4527 53.538 26.779 53.362 27.087C53.1933 27.3877 52.9257 27.637 52.559 27.835C52.1923 28.033 51.723 28.132 51.151 28.132ZM60.039 28V21.147H64.582V22.269H61.403V23.875H64.01V24.997H61.403V26.878H64.56V28H60.039ZM65.682 28V21.147H70.049V22.269H66.914V23.754H69.466V24.876H66.914V28H65.682ZM74.57 26.537H71.831L72.007 25.558H74.361L74.57 26.537ZM73.261 23.6L72.007 28H70.621L72.876 21.125H73.635L75.89 28H74.482L73.261 23.6Z"
          className="dark:fill-[#111] fill-[#D9D9D9]"
        />
        <path
          d="M21.503 39V37.394H18.907V36.492L21.822 32.147H22.834V36.272H23.747V37.405H22.834V39H21.503ZM20.282 36.294H21.536V34.292L20.282 36.294ZM25.166 36.844L28.092 33.478L28.301 34.402L25.375 37.757L25.166 36.844ZM26.75 39.132C26.2587 39.132 25.8297 38.9963 25.463 38.725C25.1037 38.4537 24.825 38.0577 24.627 37.537C24.4363 37.009 24.341 36.3673 24.341 35.612C24.341 34.864 24.4363 34.2223 24.627 33.687C24.825 33.1517 25.1037 32.7447 25.463 32.466C25.8297 32.18 26.2587 32.037 26.75 32.037C27.2413 32.037 27.6667 32.18 28.026 32.466C28.3927 32.7447 28.6713 33.1517 28.862 33.687C29.06 34.2223 29.159 34.864 29.159 35.612C29.159 36.3673 29.06 37.009 28.862 37.537C28.6713 38.0577 28.3927 38.4537 28.026 38.725C27.6667 38.9963 27.2413 39.132 26.75 39.132ZM26.75 38.087C27.014 38.087 27.2267 37.9917 27.388 37.801C27.5567 37.603 27.6813 37.3207 27.762 36.954C27.8427 36.5873 27.883 36.14 27.883 35.612C27.883 35.084 27.8427 34.6367 27.762 34.27C27.6813 33.9033 27.5567 33.6247 27.388 33.434C27.2267 33.236 27.014 33.137 26.75 33.137C26.4933 33.137 26.2807 33.236 26.112 33.434C25.9433 33.6247 25.8187 33.9033 25.738 34.27C25.6573 34.6367 25.617 35.084 25.617 35.612C25.617 36.14 25.6573 36.5873 25.738 36.954C25.8187 37.3207 25.9433 37.603 26.112 37.801C26.2807 37.9917 26.4933 38.087 26.75 38.087ZM30.666 36.844L33.592 33.478L33.801 34.402L30.875 37.757L30.666 36.844ZM32.25 39.132C31.7587 39.132 31.3297 38.9963 30.963 38.725C30.6037 38.4537 30.325 38.0577 30.127 37.537C29.9363 37.009 29.841 36.3673 29.841 35.612C29.841 34.864 29.9363 34.2223 30.127 33.687C30.325 33.1517 30.6037 32.7447 30.963 32.466C31.3297 32.18 31.7587 32.037 32.25 32.037C32.7413 32.037 33.1667 32.18 33.526 32.466C33.8927 32.7447 34.1713 33.1517 34.362 33.687C34.56 34.2223 34.659 34.864 34.659 35.612C34.659 36.3673 34.56 37.009 34.362 37.537C34.1713 38.0577 33.8927 38.4537 33.526 38.725C33.1667 38.9963 32.7413 39.132 32.25 39.132ZM32.25 38.087C32.514 38.087 32.7267 37.9917 32.888 37.801C33.0567 37.603 33.1813 37.3207 33.262 36.954C33.3427 36.5873 33.383 36.14 33.383 35.612C33.383 35.084 33.3427 34.6367 33.262 34.27C33.1813 33.9033 33.0567 33.6247 32.888 33.434C32.7267 33.236 32.514 33.137 32.25 33.137C31.9933 33.137 31.7807 33.236 31.612 33.434C31.4433 33.6247 31.3187 33.9033 31.238 34.27C31.1573 34.6367 31.117 35.084 31.117 35.612C31.117 36.14 31.1573 36.5873 31.238 36.954C31.3187 37.3207 31.4433 37.603 31.612 37.801C31.7807 37.9917 31.9933 38.087 32.25 38.087ZM36.166 36.844L39.092 33.478L39.301 34.402L36.375 37.757L36.166 36.844ZM37.75 39.132C37.2587 39.132 36.8297 38.9963 36.463 38.725C36.1037 38.4537 35.825 38.0577 35.627 37.537C35.4363 37.009 35.341 36.3673 35.341 35.612C35.341 34.864 35.4363 34.2223 35.627 33.687C35.825 33.1517 36.1037 32.7447 36.463 32.466C36.8297 32.18 37.2587 32.037 37.75 32.037C38.2413 32.037 38.6667 32.18 39.026 32.466C39.3927 32.7447 39.6713 33.1517 39.862 33.687C40.06 34.2223 40.159 34.864 40.159 35.612C40.159 36.3673 40.06 37.009 39.862 37.537C39.6713 38.0577 39.3927 38.4537 39.026 38.725C38.6667 38.9963 38.2413 39.132 37.75 39.132ZM37.75 38.087C38.014 38.087 38.2267 37.9917 38.388 37.801C38.5567 37.603 38.6813 37.3207 38.762 36.954C38.8427 36.5873 38.883 36.14 38.883 35.612C38.883 35.084 38.8427 34.6367 38.762 34.27C38.6813 33.9033 38.5567 33.6247 38.388 33.434C38.2267 33.236 38.014 33.137 37.75 33.137C37.4933 33.137 37.2807 33.236 37.112 33.434C36.9433 33.6247 36.8187 33.9033 36.738 34.27C36.6573 34.6367 36.617 35.084 36.617 35.612C36.617 36.14 36.6573 36.5873 36.738 36.954C36.8187 37.3207 36.9433 37.603 37.112 37.801C37.2807 37.9917 37.4933 38.087 37.75 38.087ZM43.14 39.143C42.8833 39.143 42.667 39.055 42.491 38.879C42.3223 38.703 42.238 38.4903 42.238 38.241C42.238 37.9917 42.3223 37.7827 42.491 37.614C42.667 37.438 42.8833 37.35 43.14 37.35C43.382 37.35 43.591 37.438 43.767 37.614C43.943 37.7827 44.031 37.9917 44.031 38.241C44.031 38.4903 43.943 38.703 43.767 38.879C43.591 39.055 43.382 39.143 43.14 39.143ZM47.166 36.844L50.092 33.478L50.301 34.402L47.375 37.757L47.166 36.844ZM48.75 39.132C48.2587 39.132 47.8297 38.9963 47.463 38.725C47.1037 38.4537 46.825 38.0577 46.627 37.537C46.4363 37.009 46.341 36.3673 46.341 35.612C46.341 34.864 46.4363 34.2223 46.627 33.687C46.825 33.1517 47.1037 32.7447 47.463 32.466C47.8297 32.18 48.2587 32.037 48.75 32.037C49.2413 32.037 49.6667 32.18 50.026 32.466C50.3927 32.7447 50.6713 33.1517 50.862 33.687C51.06 34.2223 51.159 34.864 51.159 35.612C51.159 36.3673 51.06 37.009 50.862 37.537C50.6713 38.0577 50.3927 38.4537 50.026 38.725C49.6667 38.9963 49.2413 39.132 48.75 39.132ZM48.75 38.087C49.014 38.087 49.2267 37.9917 49.388 37.801C49.5567 37.603 49.6813 37.3207 49.762 36.954C49.8427 36.5873 49.883 36.14 49.883 35.612C49.883 35.084 49.8427 34.6367 49.762 34.27C49.6813 33.9033 49.5567 33.6247 49.388 33.434C49.2267 33.236 49.014 33.137 48.75 33.137C48.4933 33.137 48.2807 33.236 48.112 33.434C47.9433 33.6247 47.8187 33.9033 47.738 34.27C47.6573 34.6367 47.617 35.084 47.617 35.612C47.617 36.14 47.6573 36.5873 47.738 36.954C47.8187 37.3207 47.9433 37.603 48.112 37.801C48.2807 37.9917 48.4933 38.087 48.75 38.087ZM52.666 36.844L55.592 33.478L55.801 34.402L52.875 37.757L52.666 36.844ZM54.25 39.132C53.7587 39.132 53.3297 38.9963 52.963 38.725C52.6037 38.4537 52.325 38.0577 52.127 37.537C51.9363 37.009 51.841 36.3673 51.841 35.612C51.841 34.864 51.9363 34.2223 52.127 33.687C52.325 33.1517 52.6037 32.7447 52.963 32.466C53.3297 32.18 53.7587 32.037 54.25 32.037C54.7413 32.037 55.1667 32.18 55.526 32.466C55.8927 32.7447 56.1713 33.1517 56.362 33.687C56.56 34.2223 56.659 34.864 56.659 35.612C56.659 36.3673 56.56 37.009 56.362 37.537C56.1713 38.0577 55.8927 38.4537 55.526 38.725C55.1667 38.9963 54.7413 39.132 54.25 39.132ZM54.25 38.087C54.514 38.087 54.7267 37.9917 54.888 37.801C55.0567 37.603 55.1813 37.3207 55.262 36.954C55.3427 36.5873 55.383 36.14 55.383 35.612C55.383 35.084 55.3427 34.6367 55.262 34.27C55.1813 33.9033 55.0567 33.6247 54.888 33.434C54.7267 33.236 54.514 33.137 54.25 33.137C53.9933 33.137 53.7807 33.236 53.612 33.434C53.4433 33.6247 53.3187 33.9033 53.238 34.27C53.1573 34.6367 53.117 35.084 53.117 35.612C53.117 36.14 53.1573 36.5873 53.238 36.954C53.3187 37.3207 53.4433 37.603 53.612 37.801C53.7807 37.9917 53.9933 38.087 54.25 38.087ZM57.165 36.173V35.029H58.397V36.173H57.165ZM57.165 37.944V36.789H60.311V37.944H57.165ZM57.605 39V32.147H59.981C60.5237 32.147 60.9673 32.2387 61.312 32.422C61.664 32.6053 61.9243 32.851 62.093 33.159C62.269 33.467 62.357 33.808 62.357 34.182C62.357 34.4533 62.3093 34.71 62.214 34.952C62.1187 35.194 61.9757 35.4067 61.785 35.59C61.5943 35.7733 61.3523 35.9163 61.059 36.019C60.773 36.1217 60.432 36.173 60.036 36.173H59.024V39H57.605ZM59.024 35.029H59.948C60.1533 35.029 60.3257 34.9923 60.465 34.919C60.6117 34.8457 60.7217 34.7467 60.795 34.622C60.8757 34.49 60.916 34.3397 60.916 34.171C60.916 34.0023 60.8757 33.8557 60.795 33.731C60.7217 33.6063 60.6153 33.511 60.476 33.445C60.3367 33.3717 60.1643 33.335 59.959 33.335H59.024V35.029Z"
          className="dark:fill-[#111] fill-[#D9D9D9]"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M82.021 10.6066C82.021 10.3414 82.1264 10.0871 82.3139 9.89964C82.5014 9.71214 82.7557 9.60679 83.0208 9.60675H88.6777C88.9428 9.60679 89.1971 9.71214 89.3846 9.89964C89.5721 10.0871 89.6775 10.3414 89.6775 10.6066V16.2635C89.673 16.5256 89.5656 16.7755 89.3786 16.9593C89.1916 17.1431 88.9399 17.2461 88.6777 17.2461C88.4155 17.2461 88.1637 17.1431 87.9767 16.9593C87.7897 16.7755 87.6824 16.5256 87.6778 16.2635L87.6778 13.0207L82.3137 18.3848C82.1262 18.5723 81.8718 18.6777 81.6066 18.6777C81.3414 18.6777 81.087 18.5723 80.8995 18.3848C80.712 18.1972 80.6066 17.9429 80.6066 17.6777C80.6066 17.4124 80.712 17.1581 80.8995 16.9706L86.2636 11.6064L83.0208 11.6064C82.7557 11.6064 82.5014 11.5011 82.3139 11.3136C82.1264 11.1261 82.021 10.8718 82.021 10.6066Z"
          className="dark:fill-[#D9D9D9] fill-[#111]"
        />
      </Link>
    </svg>
  );
};

export default HeroBadge;