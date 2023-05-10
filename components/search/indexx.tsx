import React from "react";

function Search() {
  return (
    <div className="container px-4 mx-auto mt-20">
      <div className="flex xl:flex-row flex-col">
        <div className="xl:px-5 xl:w-[30%]">
          <div className="flex items-center gap-2">
            <div>
              <svg
                width="11"
                height="5"
                viewBox="0 0 11 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.375 1.70834C10.375 2.00751 10.1325 2.25001 9.83333 2.25001L8.75 2.25001C8.7194 2.25001 8.68939 2.24746 8.66014 2.24259C8.43919 2.87758 7.83529 3.33334 7.125 3.33334C6.41471 3.33334 5.81081 2.87758 5.58986 2.24259C5.56061 2.24746 5.5306 2.25001 5.5 2.25001L1.16667 2.25001C0.86751 2.25001 0.625 2.00751 0.625 1.70834C0.625 1.40918 0.86751 1.16668 1.16667 1.16668L5.5 1.16668C5.5306 1.16668 5.56061 1.16922 5.58986 1.1741C5.81081 0.539102 6.41471 0.0833435 7.125 0.0833435C7.83529 0.0833434 8.43919 0.539102 8.66014 1.1741C8.68939 1.16922 8.7194 1.16668 8.75 1.16668L9.83333 1.16668C10.1325 1.16668 10.375 1.40918 10.375 1.70834ZM7.125 2.25001C6.82584 2.25001 6.58333 2.00751 6.58333 1.70834C6.58333 1.40918 6.82584 1.16668 7.125 1.16668C7.42416 1.16668 7.66667 1.40918 7.66667 1.70834C7.66667 2.00751 7.42416 2.25001 7.125 2.25001Z"
                  fill="black"
                />
              </svg>
              <svg
                width="11"
                height="4"
                viewBox="0 0 11 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.375 1.70834C10.375 2.00751 10.1325 2.25001 9.83333 2.25001L8.75 2.25001C8.7194 2.25001 8.68939 2.24746 8.66014 2.24259C8.43919 2.87758 7.83529 3.33334 7.125 3.33334C6.41471 3.33334 5.81081 2.87758 5.58986 2.24259C5.56061 2.24746 5.5306 2.25001 5.5 2.25001L1.16667 2.25001C0.86751 2.25001 0.625 2.00751 0.625 1.70834C0.625 1.40918 0.86751 1.16668 1.16667 1.16668L5.5 1.16668C5.5306 1.16668 5.56061 1.16922 5.58986 1.1741C5.81081 0.539102 6.41471 0.0833435 7.125 0.0833435C7.83529 0.0833434 8.43919 0.539102 8.66014 1.1741C8.68939 1.16922 8.7194 1.16668 8.75 1.16668L9.83333 1.16668C10.1325 1.16668 10.375 1.40918 10.375 1.70834ZM7.125 2.25001C6.82584 2.25001 6.58333 2.00751 6.58333 1.70834C6.58333 1.40918 6.82584 1.16668 7.125 1.16668C7.42416 1.16668 7.66667 1.40918 7.66667 1.70834C7.66667 2.00751 7.42416 2.25001 7.125 2.25001Z"
                  fill="black"
                />
              </svg>
              <svg
                width="11"
                height="4"
                viewBox="0 0 11 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.375 1.70834C10.375 2.00751 10.1325 2.25001 9.83333 2.25001L8.75 2.25001C8.7194 2.25001 8.68939 2.24746 8.66014 2.24259C8.43919 2.87758 7.83529 3.33334 7.125 3.33334C6.41471 3.33334 5.81081 2.87758 5.58986 2.24259C5.56061 2.24746 5.5306 2.25001 5.5 2.25001L1.16667 2.25001C0.86751 2.25001 0.625 2.00751 0.625 1.70834C0.625 1.40918 0.86751 1.16668 1.16667 1.16668L5.5 1.16668C5.5306 1.16668 5.56061 1.16922 5.58986 1.1741C5.81081 0.539102 6.41471 0.0833435 7.125 0.0833435C7.83529 0.0833434 8.43919 0.539102 8.66014 1.1741C8.68939 1.16922 8.7194 1.16668 8.75 1.16668L9.83333 1.16668C10.1325 1.16668 10.375 1.40918 10.375 1.70834ZM7.125 2.25001C6.82584 2.25001 6.58333 2.00751 6.58333 1.70834C6.58333 1.40918 6.82584 1.16668 7.125 1.16668C7.42416 1.16668 7.66667 1.40918 7.66667 1.70834C7.66667 2.00751 7.42416 2.25001 7.125 2.25001Z"
                  fill="black"
                />
              </svg>
            </div>
            <div>
              <h5 className="font-bold">Filters</h5>
            </div>
          </div>
          <div className="border-t border-gray-200 my-1"></div>
          <div className="grid gird-cols-1">
            <div className="mb-2">
              <div>
                <div className="flex items-center px-1 py-1">
                  <div>
                    <svg
                      width="11"
                      height="17"
                      viewBox="0 0 11 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26776 0H1.73245C1.12338 0 0.629883 0.493525 0.629883 1.10257V15.8974C0.629883 16.5064 1.12341 17 1.73245 17H9.26748C9.87655 17 10.37 16.5064 10.37 15.8974V1.10257C10.3704 0.493525 9.87683 0 9.26776 0ZM8.49689 0.654755C8.56405 0.654755 8.61869 0.709394 8.61869 0.776552C8.61869 0.844023 8.56377 0.898349 8.49689 0.898349C8.42942 0.898349 8.37509 0.84371 8.37509 0.776552C8.37478 0.709394 8.42942 0.654755 8.49689 0.654755ZM4.19586 0.549631H6.919C7.01544 0.549631 7.09306 0.627561 7.09306 0.723381C7.09306 0.819513 7.01544 0.897131 6.919 0.897131H4.19586C4.09941 0.897131 4.0218 0.819201 4.0218 0.723381C4.02211 0.627592 4.09941 0.549631 4.19586 0.549631ZM3.08492 16.2748H2.81682C2.7989 16.2748 2.78457 16.2602 2.78457 16.2422C2.78457 16.2247 2.7989 16.2097 2.81682 16.2097H3.08492C3.10312 16.2097 3.11745 16.2247 3.11745 16.2422C3.11714 16.2602 3.10281 16.2748 3.08492 16.2748ZM3.08492 16.144H2.81682C2.7989 16.144 2.78457 16.1297 2.78457 16.1118C2.78457 16.0939 2.7989 16.0792 2.81682 16.0792H3.08492C3.10312 16.0792 3.11745 16.0939 3.11745 16.1118C3.11714 16.1297 3.10281 16.144 3.08492 16.144ZM3.31062 16.2291C3.31062 16.2676 3.27956 16.299 3.24106 16.299C3.20253 16.299 3.17119 16.2676 3.17119 16.2291V15.9989H2.73021V16.2291C2.73021 16.2676 2.69917 16.299 2.66065 16.299C2.62215 16.299 2.5908 16.2676 2.5908 16.2291V15.9293C2.5908 15.8908 2.62215 15.8595 2.66065 15.8595H3.24106C3.27956 15.8595 3.31062 15.8908 3.31062 15.9293V16.2291ZM6.37296 16.2076C6.37296 16.3599 6.24935 16.4832 6.09708 16.4832H4.8912C4.73862 16.4832 4.61532 16.3599 4.61532 16.2076V15.9664C4.61532 15.8141 4.73862 15.6908 4.8912 15.6908H6.09708C6.24935 15.6908 6.37296 15.8141 6.37296 15.9664V16.2076ZM8.17296 16.3121H7.9541C7.9156 16.3121 7.88454 16.2808 7.88454 16.2422C7.88454 16.2037 7.91557 16.1727 7.9541 16.1727H8.17296C8.22014 16.1727 8.25832 16.1359 8.25832 16.0909C8.25832 16.0458 8.22011 16.0094 8.17296 16.0094H7.98844C7.98157 16.0189 7.97293 16.0237 7.95741 16.0249C7.95354 16.027 7.94695 16.024 7.9422 16.0219L7.82843 15.9738C7.81469 15.9679 7.80545 15.9544 7.80545 15.9395C7.80545 15.9246 7.81441 15.9108 7.82815 15.9051L7.94192 15.8571C7.95563 15.8511 7.97208 15.8544 7.98282 15.8651C7.98432 15.8666 7.98582 15.8681 7.98701 15.8699H8.17303C8.29695 15.8699 8.39751 15.9693 8.39751 16.0912C8.39745 16.213 8.29688 16.3121 8.17296 16.3121ZM9.63499 15.346H1.27296V1.7H9.63499V15.346Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs px-2 font-semibold">
                      Phone Company
                    </span>
                  </div>
                </div>

                <div className="relative inline-block w-full">
                  <select className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded leading-tight focus:outline-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div>
                <div className="flex items-center px-1 py-1">
                  <div>
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 15 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.66667 0.75C0.747396 0.75 0 1.53477 0 2.5V2.70234C0 2.88828 0.114583 3.04688 0.263021 3.14805C0.606771 3.3832 0.833333 3.78789 0.833333 4.25C0.833333 4.71211 0.606771 5.1168 0.263021 5.35195C0.114583 5.45312 0 5.61172 0 5.79766V7.75H15V5.79766C15 5.61172 14.8854 5.45312 14.737 5.35195C14.3932 5.1168 14.1667 4.71211 14.1667 4.25C14.1667 3.78789 14.3932 3.3832 14.737 3.14805C14.8854 3.04688 15 2.88828 15 2.70234V2.5C15 1.53477 14.2526 0.75 13.3333 0.75H1.66667ZM15 8.625H0V10.375C0 10.859 0.372396 11.25 0.833333 11.25H2.08333V10.375C2.08333 10.1344 2.27083 9.9375 2.5 9.9375C2.72917 9.9375 2.91667 10.1344 2.91667 10.375V11.25H5.41667V10.375C5.41667 10.1344 5.60417 9.9375 5.83333 9.9375C6.0625 9.9375 6.25 10.1344 6.25 10.375V11.25H8.75V10.375C8.75 10.1344 8.9375 9.9375 9.16667 9.9375C9.39583 9.9375 9.58333 10.1344 9.58333 10.375V11.25H12.0833V10.375C12.0833 10.1344 12.2708 9.9375 12.5 9.9375C12.7292 9.9375 12.9167 10.1344 12.9167 10.375V11.25H14.1667C14.6276 11.25 15 10.859 15 10.375V8.625ZM5 3.375V5.125C5 5.60898 4.6276 6 4.16667 6C3.70573 6 3.33333 5.60898 3.33333 5.125V3.375C3.33333 2.89102 3.70573 2.5 4.16667 2.5C4.6276 2.5 5 2.89102 5 3.375ZM8.33333 3.375V5.125C8.33333 5.60898 7.96094 6 7.5 6C7.03906 6 6.66667 5.60898 6.66667 5.125V3.375C6.66667 2.89102 7.03906 2.5 7.5 2.5C7.96094 2.5 8.33333 2.89102 8.33333 3.375ZM11.6667 3.375V5.125C11.6667 5.60898 11.2943 6 10.8333 6C10.3724 6 10 5.60898 10 5.125V3.375C10 2.89102 10.3724 2.5 10.8333 2.5C11.2943 2.5 11.6667 2.89102 11.6667 3.375Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs px-2 font-semibold">RAM</span>
                  </div>
                </div>

                <div className="relative inline-block w-full">
                  <select className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded leading-tight focus:outline-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div>
                <div className="flex items-center px-1 py-1">
                  <div>
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 21 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 3.53125C0 1.89102 1.30521 0.5625 2.91667 0.5625H16.9167C18.5281 0.5625 19.8333 1.89102 19.8333 3.53125V4.125C20.4786 4.125 21 4.65566 21 5.3125V7.6875C21 8.34434 20.4786 8.875 19.8333 8.875V9.46875C19.8333 11.109 18.5281 12.4375 16.9167 12.4375H2.91667C1.30521 12.4375 0 11.109 0 9.46875V3.53125ZM2.91667 2.9375C2.59583 2.9375 2.33333 3.20469 2.33333 3.53125V9.46875C2.33333 9.79531 2.59583 10.0625 2.91667 10.0625H16.9167C17.2375 10.0625 17.5 9.79531 17.5 9.46875V3.53125C17.5 3.20469 17.2375 2.9375 16.9167 2.9375H2.91667ZM16.3333 4.125V8.875H3.5V4.125H16.3333Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs px-2 font-semibold">Battery</span>
                  </div>
                </div>

                <div className="relative inline-block w-full">
                  <select className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded leading-tight focus:outline-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div>
                <div className="flex items-center px-1 py-1">
                  <div>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.33288 1.62141H8.00158L8.09795 1.29475C8.1285 1.18901 8.16612 1.00569 8.16612 1.00569H8.17085C8.17085 1.00569 8.20845 1.18901 8.23889 1.29475L8.33288 1.62141ZM6.70045 1.17735C6.70045 1.05049 6.6534 0.975319 6.44665 0.975319H6.30805V1.38401H6.48665C6.61822 1.38401 6.70045 1.31124 6.70045 1.17735ZM4.72339 1.95491C4.97485 1.95491 5.1769 1.73879 5.1769 1.45216C5.1769 1.17735 4.97487 0.970497 4.72339 0.970497C4.47201 0.970497 4.26998 1.17735 4.26998 1.45216C4.26998 1.73879 4.47201 1.95491 4.72339 1.95491ZM10.9449 2.93441V3.68807H11.4032C12.0316 3.68807 12.541 4.19745 12.541 4.8258V13H10.3452V6.29735H2.52443V13H0.458984V4.82583C0.458984 4.19747 0.968342 3.68809 1.59672 3.68809H2.05507V2.93443H1.02784C0.713653 2.93443 0.458984 2.67974 0.458984 2.36555V0.568856C0.458984 0.25469 0.713674 0 1.02784 0H11.9721C12.2863 0 12.541 0.25469 12.541 0.568856V2.36553C12.541 2.67972 12.2863 2.93439 11.9721 2.93439L10.9449 2.93441ZM10.9626 2.30268H12.048V1.95028H11.3737V1.63305H11.8859V1.28069H11.3737V0.975319H12.0151V0.622725H10.9626V2.30268ZM7.38144 2.30268H7.80428L7.90531 1.95028H8.42926L8.5326 2.30268H8.95553L8.38463 0.622747H7.95234L7.38144 2.30268ZM5.89685 2.30268H6.30805V1.73639H6.50071L6.79903 2.30268H7.25724L6.93071 1.71528C6.89071 1.64492 6.8672 1.61436 6.8672 1.61436V1.60954C7.03403 1.52491 7.11866 1.32993 7.11866 1.15141C7.11866 0.907154 6.99875 0.735498 6.80847 0.662724C6.73561 0.634578 6.65338 0.622725 6.48191 0.622725H5.89685V2.30268ZM3.84472 1.45216C3.84472 1.94565 4.2159 2.33082 4.72339 2.33082C5.23088 2.33082 5.60216 1.94565 5.60216 1.45216C5.60216 0.970497 5.23088 0.59458 4.72339 0.59458C4.2159 0.59458 3.84472 0.970497 3.84472 1.45216ZM2.19164 1.80936C2.19164 1.27829 1.43511 1.31587 1.43511 1.10438C1.43511 1.0105 1.52908 0.972918 1.61371 0.972918C1.81574 0.972918 1.98489 1.12087 1.98489 1.12087L2.15878 0.784971C2.15878 0.784971 1.98018 0.594601 1.61834 0.594601C1.28474 0.594601 1.02402 0.799054 1.02402 1.10921C1.02402 1.62604 1.78048 1.61901 1.78048 1.81862C1.78048 1.91973 1.68891 1.95268 1.60428 1.95268C1.3928 1.95268 1.20253 1.77881 1.20253 1.77881L0.986398 2.09117C0.986398 2.09117 1.20481 2.3308 1.59961 2.3308C1.97784 2.33082 2.19164 2.08879 2.19164 1.80936ZM3.24381 0.975319H3.75361V0.622725H2.32276V0.975319H2.83265V2.30268H3.24383L3.24381 0.975319ZM9.59221 2.93441H3.40775V3.68807H9.59221V2.93441ZM10.6173 1.35344H10.0159V1.70362H10.2532V1.83268C10.2532 1.83268 10.1098 1.95491 9.91243 1.95491C9.65173 1.95491 9.43079 1.76473 9.43079 1.4451C9.43079 1.19604 9.57411 0.970497 9.92651 0.970497C10.1638 0.970497 10.3354 1.12567 10.3354 1.12567L10.5327 0.817917C10.5327 0.817917 10.3166 0.59458 9.8866 0.59458C9.37439 0.59458 9.00561 0.970497 9.00561 1.45919C9.00561 2.00897 9.40022 2.33082 9.8302 2.33082C10.1098 2.33082 10.2719 2.18527 10.2719 2.18527H10.2766C10.2766 2.18527 10.2743 2.22045 10.2743 2.25563V2.30266H10.6173L10.6173 1.35344ZM9.88456 12.8104V12.4667C9.88456 12.3619 9.79968 12.2771 9.69493 12.2771H3.30501C3.20028 12.2771 3.11538 12.3619 3.11538 12.4667V12.8104C3.11538 12.9151 3.20028 13 3.30501 13H9.69497C9.79968 13 9.88456 12.9151 9.88456 12.8104ZM9.88456 7.59578V7.25209C9.88456 7.14737 9.79968 7.06246 9.69493 7.06246H3.30501C3.20028 7.06246 3.11538 7.14737 3.11538 7.25209V7.59578C3.11538 7.70052 3.20028 7.78541 3.30501 7.78541H9.69497C9.79968 7.78541 9.88456 7.7005 9.88456 7.59578ZM9.88456 8.89944V8.55572C9.88456 8.451 9.79968 8.3661 9.69493 8.3661H3.30501C3.20028 8.3661 3.11538 8.451 3.11538 8.55572V8.89944C3.11538 9.00416 3.20028 9.08906 3.30501 9.08906H9.69497C9.79968 9.08906 9.88456 9.00416 9.88456 8.89944ZM9.88456 10.2031V9.8594C9.88456 9.75465 9.79968 9.66977 9.69493 9.66977H3.30501C3.20028 9.66977 3.11538 9.75465 3.11538 9.8594V10.2031C3.11538 10.3078 3.20028 10.3927 3.30501 10.3927H9.69497C9.79968 10.3927 9.88456 10.3078 9.88456 10.2031ZM9.88456 11.5067V11.163C9.88456 11.0583 9.79968 10.9734 9.69493 10.9734H3.30501C3.20028 10.9734 3.11538 11.0583 3.11538 11.163V11.5067C3.11538 11.6115 3.20028 11.6963 3.30501 11.6963H9.69497C9.79968 11.6963 9.88456 11.6115 9.88456 11.5067Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs px-2 font-semibold">Storage</span>
                  </div>
                </div>

                <div className="relative inline-block w-full">
                  <select className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded leading-tight focus:outline-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div>
                <div className="flex items-center px-1 py-1">
                  <div>
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.65938 1.025L4.33437 2H2C0.896875 2 0 2.89687 0 4V12C0 13.1031 0.896875 14 2 14H14C15.1031 14 16 13.1031 16 12V4C16 2.89687 15.1031 2 14 2H11.6656L11.3406 1.025C11.1375 0.4125 10.5656 0 9.91875 0H6.08125C5.43438 0 4.8625 0.4125 4.65938 1.025ZM8 11C6.34375 11 5 9.65625 5 8C5 6.34375 6.34375 5 8 5C9.65625 5 11 6.34375 11 8C11 9.65625 9.65625 11 8 11Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs px-2 font-semibold">Camera</span>
                  </div>
                </div>

                <div className="relative inline-block w-full">
                  <select className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded leading-tight focus:outline-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div>
                <div className="flex items-center px-1 py-1">
                  <div>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 5 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.40632 0.639116L0.74707 1.29837L1.06464 1.61576C0.654835 2.20621 0.651313 2.81524 1.06446 3.22815C1.285 3.44869 1.52813 3.56047 1.78747 3.56047H1.78765C2.20578 3.56029 2.60228 3.27144 2.97159 2.97603C3.24617 2.75968 3.45669 2.64984 3.59732 2.64984C3.65197 2.64984 3.69314 2.66629 3.73024 2.70358C3.78447 2.7578 3.85035 2.85004 3.79892 3.02576C3.75921 3.16141 3.65568 3.31777 3.50758 3.46575C3.25206 3.72126 2.85355 3.85461 2.61789 3.75867L2.47483 3.70044L2.12307 4.57051L2.26631 4.62813C2.44095 4.69802 2.6222 4.73379 2.80515 4.73379C3.1495 4.73361 3.49768 4.60858 3.81968 4.37098L4.16215 4.71345L4.8214 4.05432L4.46181 3.69491C4.81029 3.21582 4.9361 2.52202 4.4241 2.00984C4.19682 1.78256 3.94349 1.66737 3.67092 1.66737C3.23063 1.66737 2.82112 1.95828 2.40518 2.28278C2.23334 2.41843 1.99768 2.60399 1.846 2.60399C1.80429 2.60399 1.77083 2.58887 1.73713 2.55536C1.68922 2.50745 1.6404 2.43416 1.68831 2.29019C1.7276 2.1716 1.82275 2.03467 1.9635 1.89392C2.13473 1.72238 2.39146 1.60258 2.58783 1.60258C2.61789 1.60258 2.64528 1.60568 2.66914 1.61151L2.80297 1.6446L3.10633 0.818244L2.95744 0.767116C2.5395 0.623571 2.14845 0.681924 1.72638 0.959481L1.40632 0.639116Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs px-2 font-semibold">Price</span>
                  </div>
                </div>

                <div className="relative inline-block w-full">
                  <select className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded leading-tight focus:outline-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="grid xl:grid-cols-4 mt-5 xl:mt-0 grid-cols-2 gap-16 border-l-[1px] pl-5 xl:pl-8">
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
              <div className="w-[120px] h-[110px]">
                <img
                  className="h-full w-full"
                  src="./assets/iphone-13-pro-max 2.png"
                />
                <h5 className="text-[14px] text-center">iphone 13 pro max</h5>
              </div>
            </div>
          </div>
          <div className="container flex justify-end mt-10 mx-auto">
            <nav aria-label="Page navigation example">
              <ul className="inline-flex items-center -space-x-px">
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
