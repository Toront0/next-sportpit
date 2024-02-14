import Link from "next/link";
import React from "react";

const HeroBadge5 = () => {
  return (
    <svg
      width="230"
      height="30"
      viewBox="0 0 230 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="223" cy="14" r="5" fill="#D9D9D9" />
      <path d="M217 14H105" className="dark:stroke-[#D9D9D9] stroke-[#111]" />
      <circle cx="223" cy="14" r="6.5" stroke="#D9D9D9" />
      <rect
        x="0.5"
        y="0.5"
        width="105"
        height="29"
        rx="1.5"
        className="dark:stroke-[#D9D9D9] stroke-[#111]"
      />
      <path
        d="M8.022 13.132C7.45733 13.132 6.98433 12.9927 6.603 12.714C6.229 12.4353 5.943 12.032 5.745 11.504C5.55433 10.976 5.459 10.3343 5.459 9.579C5.459 8.83833 5.55433 8.20767 5.745 7.687C5.943 7.159 6.229 6.75567 6.603 6.477C6.98433 6.191 7.45733 6.048 8.022 6.048C8.57933 6.048 9.045 6.191 9.419 6.477C9.80033 6.75567 10.0863 7.159 10.277 7.687C10.475 8.20767 10.574 8.83833 10.574 9.579C10.574 10.3343 10.475 10.9797 10.277 11.515C10.0863 12.043 9.80033 12.4463 9.419 12.725C9.045 12.9963 8.57933 13.132 8.022 13.132ZM8.022 12.12C8.30067 12.12 8.53533 12.0283 8.726 11.845C8.924 11.6543 9.07433 11.372 9.177 10.998C9.287 10.6167 9.342 10.14 9.342 9.568C9.342 9.03267 9.287 8.578 9.177 8.204C9.07433 7.83 8.924 7.54767 8.726 7.357C8.53533 7.159 8.30067 7.06 8.022 7.06C7.74333 7.06 7.505 7.159 7.307 7.357C7.109 7.54767 6.955 7.83 6.845 8.204C6.74233 8.578 6.691 9.03267 6.691 9.568C6.691 10.14 6.74233 10.6167 6.845 10.998C6.955 11.372 7.109 11.6543 7.307 11.845C7.505 12.0283 7.74333 12.12 8.022 12.12ZM11.245 13V6.147H13.412C13.9767 6.147 14.435 6.23133 14.787 6.4C15.1463 6.56133 15.4103 6.796 15.579 7.104C15.7477 7.40467 15.832 7.75667 15.832 8.16C15.832 8.40933 15.777 8.65867 15.667 8.908C15.5643 9.15733 15.4177 9.381 15.227 9.579C15.0363 9.777 14.809 9.92733 14.545 10.03L16.019 13H14.71L13.324 10.151H12.499V13H11.245ZM12.499 9.117H13.5C13.852 9.117 14.116 9.03633 14.292 8.875C14.468 8.70633 14.556 8.479 14.556 8.193C14.556 8.00967 14.5157 7.84833 14.435 7.709C14.3617 7.56233 14.2443 7.445 14.083 7.357C13.929 7.269 13.7347 7.225 13.5 7.225H12.499V9.117ZM19.286 13.121C18.714 13.121 18.219 12.9743 17.801 12.681C17.3903 12.3877 17.075 11.977 16.855 11.449C16.635 10.921 16.525 10.305 16.525 9.601C16.525 9.01433 16.5837 8.51933 16.701 8.116C16.8257 7.70533 16.9907 7.36433 17.196 7.093C17.4013 6.82167 17.625 6.609 17.867 6.455C18.1163 6.301 18.362 6.19467 18.604 6.136C18.8533 6.07 19.077 6.037 19.275 6.037C19.5757 6.037 19.8617 6.08467 20.133 6.18C20.4117 6.27533 20.661 6.411 20.881 6.587C21.1083 6.763 21.2917 6.97933 21.431 7.236L20.705 7.951L20.639 8.028L20.562 7.951C20.5547 7.89233 20.5437 7.83733 20.529 7.786C20.5143 7.72733 20.4667 7.65033 20.386 7.555C20.3053 7.45967 20.2137 7.37533 20.111 7.302C20.0157 7.22867 19.902 7.17367 19.77 7.137C19.638 7.093 19.484 7.071 19.308 7.071C19.1467 7.071 18.989 7.09667 18.835 7.148C18.681 7.19933 18.538 7.28733 18.406 7.412C18.2813 7.52933 18.1677 7.68333 18.065 7.874C17.9623 8.05733 17.8853 8.28467 17.834 8.556C17.7827 8.82 17.757 9.13167 17.757 9.491C17.757 9.931 17.7937 10.316 17.867 10.646C17.9403 10.9687 18.043 11.24 18.175 11.46C18.3143 11.68 18.4757 11.845 18.659 11.955C18.8497 12.0577 19.0587 12.109 19.286 12.109C19.3813 12.109 19.473 12.1053 19.561 12.098C19.649 12.0833 19.737 12.065 19.825 12.043C19.913 12.0137 19.9973 11.977 20.078 11.933C20.166 11.889 20.2503 11.834 20.331 11.768V10.503H19.198V9.469H21.453V12.406C21.123 12.6627 20.7747 12.846 20.408 12.956C20.0413 13.066 19.6673 13.121 19.286 13.121ZM25.787 11.405H23.103L23.279 10.514H25.578L25.787 11.405ZM24.5 8.402L23.114 13H21.882L24.203 6.103H24.797L27.118 13H25.864L24.5 8.402ZM27.657 6.147H28.955L31.276 10.657L31.21 6.147H32.321H32.42V6.246C32.3833 6.29 32.3577 6.33767 32.343 6.389C32.3357 6.44033 32.332 6.52833 32.332 6.653V13H31.177L28.779 8.193V13H27.657V6.147ZM33.52 13V11.999H34.862V7.148H33.597V6.147H37.381V7.148H36.039V11.999H37.436V13H33.52ZM41.319 13.121C40.945 13.121 40.593 13.055 40.263 12.923C39.933 12.7837 39.6397 12.571 39.383 12.285C39.1337 11.999 38.9393 11.636 38.8 11.196C38.6607 10.7487 38.591 10.2207 38.591 9.612C38.591 9.07667 38.646 8.60733 38.756 8.204C38.866 7.80067 39.0127 7.46333 39.196 7.192C39.3867 6.91333 39.5993 6.68967 39.834 6.521C40.076 6.35233 40.3253 6.23133 40.582 6.158C40.846 6.08467 41.1063 6.048 41.363 6.048C41.8837 6.048 42.3237 6.16533 42.683 6.4C43.0497 6.63467 43.332 6.96467 43.53 7.39L42.749 7.973L42.661 8.028L42.606 7.94C42.6133 7.88133 42.606 7.82633 42.584 7.775C42.5693 7.72367 42.5327 7.64667 42.474 7.544C42.3127 7.346 42.144 7.214 41.968 7.148C41.7993 7.082 41.6197 7.049 41.429 7.049C41.2163 7.049 41.0147 7.104 40.824 7.214C40.6333 7.31667 40.461 7.47433 40.307 7.687C40.153 7.89967 40.032 8.16367 39.944 8.479C39.8633 8.787 39.823 9.14633 39.823 9.557C39.823 9.953 39.8597 10.3087 39.933 10.624C40.0137 10.932 40.12 11.196 40.252 11.416C40.3913 11.636 40.5527 11.8047 40.736 11.922C40.9267 12.0393 41.132 12.098 41.352 12.098C41.528 12.098 41.6893 12.0723 41.836 12.021C41.99 11.9697 42.1293 11.889 42.254 11.779C42.3787 11.669 42.4923 11.5223 42.595 11.339L43.453 11.977C43.1963 12.3877 42.8957 12.681 42.551 12.857C42.2063 13.033 41.7957 13.121 41.319 13.121ZM49.976 13V6.147H54.244V7.148H51.087V8.809H53.65V9.81H51.087V13H49.976ZM55.377 6.147H56.62H56.73V6.246C56.686 6.29 56.6567 6.33767 56.642 6.389C56.6347 6.44033 56.631 6.52833 56.631 6.653V11.988H59.777V13H55.377V6.147ZM64.287 11.405H61.603L61.779 10.514H64.078L64.287 11.405ZM63 8.402L61.614 13H60.382L62.703 6.103H63.297L65.618 13H64.364L63 8.402ZM66.069 13L67.862 9.502L66.091 6.147H67.367L68.522 8.402L69.644 6.147H70.854L69.204 9.491L71.074 13H69.754L68.533 10.635L67.345 13H66.069ZM79.412 13.121C78.9573 13.121 78.5283 13.055 78.125 12.923C77.729 12.7837 77.399 12.5747 77.135 12.296L77.74 11.273L77.784 11.185L77.883 11.24C77.8977 11.2913 77.916 11.3463 77.938 11.405C77.9673 11.4637 78.026 11.5333 78.114 11.614C78.2973 11.7533 78.499 11.867 78.719 11.955C78.9463 12.0357 79.192 12.0797 79.456 12.087C79.6247 12.087 79.7787 12.0687 79.918 12.032C80.0647 11.9953 80.1893 11.9403 80.292 11.867C80.3947 11.7937 80.4753 11.702 80.534 11.592C80.5927 11.4747 80.622 11.3427 80.622 11.196C80.622 11.108 80.611 11.0237 80.589 10.943C80.567 10.8623 80.5267 10.7853 80.468 10.712C80.4167 10.6313 80.3397 10.5543 80.237 10.481C80.1343 10.4003 80.006 10.316 79.852 10.228C79.698 10.1327 79.5037 10.0337 79.269 9.931C78.7997 9.72567 78.4257 9.51667 78.147 9.304C77.8757 9.09133 77.6813 8.864 77.564 8.622C77.4467 8.38 77.388 8.105 77.388 7.797C77.388 7.45967 77.4797 7.159 77.663 6.895C77.8537 6.631 78.114 6.422 78.444 6.268C78.774 6.114 79.1517 6.037 79.577 6.037C79.863 6.037 80.1307 6.07 80.38 6.136C80.6293 6.202 80.8603 6.301 81.073 6.433C81.2857 6.55767 81.48 6.719 81.656 6.917L80.93 7.753L80.864 7.83L80.776 7.764C80.7687 7.70533 80.754 7.65033 80.732 7.599C80.7173 7.54033 80.6697 7.467 80.589 7.379C80.4497 7.247 80.2993 7.159 80.138 7.115C79.984 7.071 79.8007 7.049 79.588 7.049C79.434 7.049 79.2983 7.06733 79.181 7.104C79.0637 7.14067 78.961 7.192 78.873 7.258C78.7923 7.324 78.7263 7.401 78.675 7.489C78.631 7.56967 78.609 7.654 78.609 7.742C78.609 7.83 78.62 7.91433 78.642 7.995C78.664 8.06833 78.7007 8.14167 78.752 8.215C78.8107 8.28833 78.8913 8.36533 78.994 8.446C79.104 8.51933 79.2433 8.6 79.412 8.688C79.5807 8.776 79.7897 8.875 80.039 8.985C80.3837 9.14633 80.6733 9.304 80.908 9.458C81.1427 9.60467 81.326 9.76233 81.458 9.931C81.5973 10.0923 81.6963 10.272 81.755 10.47C81.8137 10.6607 81.843 10.877 81.843 11.119C81.843 11.449 81.7587 11.768 81.59 12.076C81.4213 12.384 81.1573 12.637 80.798 12.835C80.4387 13.0257 79.9767 13.121 79.412 13.121ZM82.811 13V6.147H87.277V7.159H84.021V8.919H86.694V9.942H84.021V11.988H87.244V13H82.811ZM88.311 13V6.147H92.777V7.159H89.521V8.919H92.194V9.942H89.521V11.988H92.744V13H88.311ZM93.712 13V6.147H95.483C95.8863 6.147 96.2237 6.18367 96.495 6.257C96.7737 6.33033 97.0083 6.43667 97.199 6.576C97.397 6.71533 97.573 6.88767 97.727 7.093C97.881 7.29833 98.0093 7.533 98.112 7.797C98.222 8.05367 98.3063 8.33233 98.365 8.633C98.4237 8.93367 98.453 9.26367 98.453 9.623C98.4383 10.1437 98.3687 10.613 98.244 11.031C98.1267 11.4417 97.9433 11.7937 97.694 12.087C97.452 12.3803 97.1367 12.6077 96.748 12.769C96.3593 12.923 95.8937 13 95.351 13H93.712ZM94.922 12.032H95.318C95.7873 12.032 96.1613 11.933 96.44 11.735C96.726 11.5297 96.9313 11.2473 97.056 10.888C97.1807 10.5287 97.2393 10.1107 97.232 9.634C97.232 9.128 97.177 8.688 97.067 8.314C96.9643 7.94 96.781 7.65033 96.517 7.445C96.253 7.23967 95.8937 7.137 95.439 7.137H94.922V12.032ZM46.522 24.132C45.9573 24.132 45.4843 23.9927 45.103 23.714C44.729 23.4353 44.443 23.032 44.245 22.504C44.0543 21.976 43.959 21.3343 43.959 20.579C43.959 19.8383 44.0543 19.2077 44.245 18.687C44.443 18.159 44.729 17.7557 45.103 17.477C45.4843 17.191 45.9573 17.048 46.522 17.048C47.0793 17.048 47.545 17.191 47.919 17.477C48.3003 17.7557 48.5863 18.159 48.777 18.687C48.975 19.2077 49.074 19.8383 49.074 20.579C49.074 21.3343 48.975 21.9797 48.777 22.515C48.5863 23.043 48.3003 23.4463 47.919 23.725C47.545 23.9963 47.0793 24.132 46.522 24.132ZM46.522 23.12C46.8007 23.12 47.0353 23.0283 47.226 22.845C47.424 22.6543 47.5743 22.372 47.677 21.998C47.787 21.6167 47.842 21.14 47.842 20.568C47.842 20.0327 47.787 19.578 47.677 19.204C47.5743 18.83 47.424 18.5477 47.226 18.357C47.0353 18.159 46.8007 18.06 46.522 18.06C46.2433 18.06 46.005 18.159 45.807 18.357C45.609 18.5477 45.455 18.83 45.345 19.204C45.2423 19.578 45.191 20.0327 45.191 20.568C45.191 21.14 45.2423 21.6167 45.345 21.998C45.455 22.372 45.609 22.6543 45.807 22.845C46.005 23.0283 46.2433 23.12 46.522 23.12ZM50.02 24V22.999H51.362V18.148H50.097V17.147H53.881V18.148H52.539V22.999H53.936V24H50.02ZM55.377 17.147H56.62H56.73V17.246C56.686 17.29 56.6567 17.3377 56.642 17.389C56.6347 17.4403 56.631 17.5283 56.631 17.653V22.988H59.777V24H55.377V17.147Z"
        className="dark:fill-[#D9D9D9] fill-[#111]"
      />
    </svg>
  );
};

export default HeroBadge5;
