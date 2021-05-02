<template>
  <div class="home">
    <!-- header -->
    <div
      class="bg-light phone:h-screen tab-land:h-auto h-screen relative phone:overflow-hidden"
      id="home"
    >
      <img
        src="https://iumi.cash/wp-content/uploads/2020/06/shape1.png"
        class="absolute w-35vw top-0 right-0 z-0 phone:hidden"
        alt
      />
      <div class="container mx-auto flex flex-col pt-32 tab-land:pb-32">
        <div class="flex justify-between phone:justify-center phone:p-0 mt-20 pl-32 desktop:pt-20">
          <div class="flex flex-col pt-10 mt-52 phone:mt-16 phone:ml-0 tablet:ml-16">
            <h1
              class="text-6xl tab-mini:text-6lg phone:text-6lg font-bold text-jp-200 leading-tight phone:text-center"
              v-html="data.home.slogan"
            >
              <!-- Quick, easy and secure
              <br />next generation e-wallet
              <br />for your smart phone-->
            </h1>
            <div class="flex mt-20 phone:justify-center items-center">
              <!-- :href="data.home.appstore_link" -->
              <a
                @click="showModal = true"
                class="mr-5 flex cursor-pointer inline-block text-4xl phone:text-5lg font-bold bg-gradient items-center text-white py-6 px-9 phone:py-5 phone:px-8 rounded-full"
              >
                <svg
                  viewBox="0 0 26 30"
                  fill="none"
                  class="w-10 mr-7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.7339 22.8223C24.2848 23.8454 23.7533 24.7872 23.1374 25.6531C22.2979 26.8335 21.6105 27.6506 21.0808 28.1043C20.2596 28.8491 19.3797 29.2305 18.4376 29.2522C17.7612 29.2522 16.9455 29.0624 15.996 28.6774C15.0434 28.2941 14.168 28.1043 13.3675 28.1043C12.528 28.1043 11.6276 28.2941 10.6646 28.6774C9.70007 29.0624 8.92306 29.2631 8.32899 29.2829C7.4255 29.3209 6.52495 28.9286 5.62605 28.1043C5.05233 27.6108 4.33471 26.7648 3.47504 25.5663C2.55267 24.2865 1.79436 22.8024 1.20029 21.1104C0.564058 19.2828 0.245117 17.5131 0.245117 15.7998C0.245117 13.8371 0.675138 12.1444 1.53646 10.7259C2.21339 9.58654 3.11394 8.68776 4.24104 8.02795C5.36815 7.36815 6.58599 7.03192 7.8975 7.01041C8.61512 7.01041 9.55618 7.22932 10.7256 7.65955C11.8918 8.09122 12.6406 8.31013 12.9688 8.31013C13.2143 8.31013 14.0461 8.05416 15.4562 7.54385C16.7897 7.0706 17.9152 6.87465 18.8372 6.95184C21.3355 7.15068 23.2125 8.12195 24.4608 9.8718C22.2264 11.207 21.1211 13.077 21.1431 15.476C21.1632 17.3446 21.8506 18.8996 23.2015 20.1342C23.8138 20.7073 24.4975 21.1502 25.2581 21.4647C25.0932 21.9365 24.919 22.3884 24.7339 22.8223ZM19.004 0.585876C19.004 2.05048 18.4614 3.41798 17.3799 4.68373C16.0749 6.18845 14.4963 7.05795 12.7844 6.92074C12.7626 6.74504 12.75 6.56011 12.75 6.36578C12.75 4.95976 13.3706 3.45504 14.4728 2.22473C15.0231 1.6018 15.7229 1.08384 16.5716 0.670656C17.4184 0.263636 18.2195 0.0385458 18.9728 0C18.9948 0.195795 19.004 0.391603 19.004 0.585857V0.585876Z"
                    fill="white"
                  />
                </svg>
                <div class="flex flex-col">App Store</div>
              </a>

              <a
                @click="showModal = true"
                class="mr-5 flex cursor-pointer items-center inline-block text-4xl phone:text-5lg font-bold bg-transparent items-center py-6 px-9 phone:py-4 phone:px-8 rounded-full border-2 border-jp-100 text-jp-200 rounded-full"
              >
                <svg
                  viewBox="0 0 33 33"
                  class="w-10 phone:w-12 mr-7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.5494 12.4377L22.8022 10.791L19.4917 15.0077L22.8653 19.3116L25.5481 17.7045C26.6683 17.0344 27.2828 16.096 27.2828 15.069C27.2828 14.0421 26.6696 13.1091 25.5494 12.4377Z"
                    fill="#2D3494"
                  />
                  <path
                    d="M7.75032 27.8069L17.7975 15.0096L7.8777 2.3513C7.84619 2.34994 7.81336 2.33496 7.78184 2.33496C6.2546 2.33496 5.229 3.62204 5.229 5.53972V24.6076C5.23163 26.5075 6.2441 27.7878 7.75032 27.8069Z"
                    fill="#2D3494"
                  />
                  <path
                    d="M21.6482 10.1038L10.3442 3.33203L18.6462 13.9269L21.6482 10.1038Z"
                    fill="#2D3494"
                  />
                  <path
                    d="M18.6443 16.0859L10.123 26.9424L21.7119 20.0003L18.6443 16.0859Z"
                    fill="#2D3494"
                  />
                </svg>
                Play Store
              </a>
            </div>

            <Modal :showing="showModal" @close="showModal = false">
              <div class="overflow-auto max-h-screen w-full">
                <div class="flex flex-col items-center p-4 mt-4 justify-center">
                  <h1 class="text-6md">Coming soon</h1>
                  <img
                    src="https://iumi.cash/wp-content/uploads/2020/06/store.png"
                    class="mt-8"
                    alt
                  />
                </div>
              </div>
            </Modal>
          </div>
          <img
            src="https://iumi.cash/wp-content/uploads/2020/06/phone1.png"
            class="w-128 h-auto z-10 tab-mini:mx-10 phone:hidden tab-port:mx-32"
            alt
          />
        </div>
      </div>
      <div class="w-full absolute phone-bottom phone:flex justify-center">
        <img
          src="https://iumi.cash/wp-content/uploads/2020/06/phone1.png"
          class="min-phone:px-20 h-auto z-10 phone-up:hidden"
          alt
        />
      </div>
      <div class="absolute bottom-0 w-full flex justify-center tab-port:mb-32 mb-36">
        <ScrollIcon
          v-scroll-to="{el: '#features',
         duration: 1100,
         easing: 'ease-in-out'}"
        />
      </div>
    </div>
    <div
      class="h-screen tab-land:h-auto tab-land:pb-32 pt-32 overflow-hidden relative"
      id="features"
    >
      <div class="container mx-auto flex flex-col phone:h-full items-center mt-4">
        <h1 class="text-6xl phone:text-5xl font-bold text-jp-100">{{data.features.title}}</h1>
        <p
          class="text-5xl phone:text-5lg text-center whitespace-pre-line leading-snug mt-5 z-30"
          v-html="data.features.description"
        >
          <!-- Just needs an internet connection via 3/4G,
          <br class="phone-up:hidden" />LTE, WiFi or satellite.
          <br class="phone:hidden" />Safe, secure blockchain
          <br class="phone-up:hidden" />solution to protect your money-->
        </p>
        <!-- 6.5rem -->
        <div class="mt-24 flex w-full justify-between">
          <img
            src="https://iumi.cash/wp-content/uploads/2020/06/phone2.png"
            class="w-128 h-auto phone:hidden tab-port:mx-24 mr-32"
            alt
          />
          <div class="flex flex-1 justify-center">
            <div class="flex flex-col max-w-5lg items-center phone:w-full phone:mx-12">
              <!-- hover cards -->
              <div class="group hover-card" v-for="(item, index) in cards" :key="index">
                <!-- svg -->
                <div class="mr-8">
                  <svg
                    class="w-32 h-32 phone:w-28 phone:h-28 group-hover:text-jp-200 fill-current"
                    viewBox="0 0 119 119"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    v-html="item.svg"
                  />
                </div>
                <div class="flex flex-col flex-1">
                  <h3 class="text-5lg phone:text-5xl text-jp-200 font-semibold">{{item.title}}</h3>
                  <p class="text-4xl phone:text-4lg font-semibold">{{item.desc}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-screen phone:h-auto tab-land:h-auto phone:pt-20 pt-32 bg-light overflow-hidden"
      id="pricing"
    >
      <div
        class="container mx-auto flex flex-col tab-land:pb-32 items-center mt-10 h-full relative"
      >
        <h1 class="text-6xl phone:text-5xl font-bold text-jp-100 mt-4">{{data.pricing.title}}</h1>
        <p class="text-5xl phone:text-5lg text-center mt-5" v-html="data.pricing.description">
          <!-- No cost for the App.
          No monthly
          <br class="phone-up:hidden" />account keeping fees.-->
        </p>
        <div class="flex w-full h-full tab-land:mt-32 phone:mt-14 phone:p-0 pl-24">
          <div class="flex mt-24 phone:mt-0 phone:flex-col phone:items-center justify-start w-full">
            <div class="phone:max-w-lg max-w-md h-auto w-full phone:z-10">
              <div
                class="flex flex-col h-auto items-center justify-between rounded-card bg-white w-full card-shadow phone:max-h-2xl phone:min-h-full"
              >
                <div
                  class="w-full flex justify-center rounded-card rounded-b-none items-center bg-gradient h-48 phone:h-60"
                >
                  <h3
                    class="text-5lg phone:text-5xl font-bold text-white mt-12"
                    v-html="data.pricing.card1_title"
                  ></h3>
                </div>
                <p
                  class="text-5lg phone:text-5lg text-center px-9 mt-18 leading-tight"
                  v-html="data.pricing.card1_desc"
                >
                  <!-- Flat 1% fee
                  <br class="phone:hidden" />on all transfers,
                  <br />paid by the sender.-->
                </p>
                <a
                  href="#"
                  class="my-24 phone:my-10 px-7 py-2 bg-gradient w-auto text-white rounded-full text-5lg min-phone:text-4xl card-shadow"
                >Get started</a>
              </div>
            </div>
            <div class="phone:max-w-lg max-w-md w-full phone:ml-0 ml-12 phone:mt-24 mt-36 z-20">
              <div
                class="flex flex-col h-auto items-center justify-between rounded-card bg-white w-full card-shadow phone:max-h-3xl phone:min-h-full"
              >
                <div
                  class="w-full flex justify-center rounded-card rounded-b-none items-center bg-gradient h-48 phone:h-60"
                >
                  <h3
                    class="text-5lg phone:text-5xl font-bold phone:mb-8 text-white mt-10 text-center"
                    v-html="data.pricing.card2_title"
                  >
                    <!-- High Volume
                    <br class="phone-up:hidden" />Business Customers-->
                  </h3>
                </div>
                <p
                  class="text-5lg phone:text-5lg phone:mt-12 text-center px-9 mt-18 leading-tight"
                  v-html="data.pricing.card2_desc"
                >
                  <!-- Contact us
                  <br />for volume
                  <br />discounts-->
                </p>
                <a
                  href="#"
                  class="my-24 phone:my-10 phone:mb-18 px-7 py-2 bg-gradient w-auto text-white rounded-full text-5lg min-phone:text-4xl card-shadow"
                >Get started</a>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 right-0">
          <img
            src="https://iumi.cash/wp-content/uploads/2020/06/girl.png"
            class="max-w-5xl laptop:px-32 phone:px-0 phone:max-w-6lg phone:-mr-48 tab-port:max-w-4xl px-16 -mr-24"
            alt
          />
        </div>
      </div>
    </div>
    <div class="min-h-screen tab-mini:h-auto pt-32" id="faqs">
      <div class="container mx-auto flex flex-col items-center pt-10 h-full">
        <h1 class="text-6xl font-bold text-center text-jp-100 mt-6">{{data.faq.title}}</h1>
        <div
          class="flex justify-between tablet-port:justify-around w-full phone:px-8 tab-port:px-24 mt-24"
        >
          <div>
            <img
              src="https://iumi.cash/wp-content/uploads/2020/06/phone3.png"
              class="w-128 h-auto phone:hidden"
              alt
            />
          </div>
          <div class="flex-1 tab-port:ml-20 tab-land:ml-32 phone:ml-0 ml-72 w-full">
            <!-- accordion -->
            <Accordion :data="accordions" />
            <!-- /accordion -->
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-screen tab-land:h-auto tab-land:py-40 w-full relative flex justify-center items-center bg-light"
      id="contacts"
    >
      <Modal :showing="showSuccess" @close="showSuccess = false">
        <div class="overflow-auto max-h-screen w-full">
          <div class="flex flex-col items-center min-w-full p-4 mt-4 justify-center">
            <svg
              class="w-32 h-32"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 367.805 367.805"
              style="enable-background:new 0 0 367.805 367.805;"
              xml:space="preserve"
            >
              <g>
                <path
                  style="fill:#3BB54A;"
                  d="M183.903,0.001c101.566,0,183.902,82.336,183.902,183.902s-82.336,183.902-183.902,183.902
		S0.001,285.469,0.001,183.903l0,0C-0.288,82.625,81.579,0.29,182.856,0.001C183.205,0,183.554,0,183.903,0.001z"
                />
                <polygon
                  style="fill:#D4E1F4;"
                  points="285.78,133.225 155.168,263.837 82.025,191.217 111.805,161.96 155.168,204.801 
		256.001,103.968 	"
                />
              </g>
            </svg>
            <h1 class="text-5xl mt-4 text-center">Thank you for your message. It has been sent.</h1>
          </div>
        </div>
      </Modal>
      <div
        class="max-w-10xl tab-port:w-full tab-port:mx-36 phone:mx-0 w-full z-10 rounded-semi-card overflow-hidden flex flex-col"
      >
        <div class="flex w-full h-full bg-white tab-port:flex-col">
          <div class="w-1/2 tab-port:w-full px-28 phone:px-16 py-18 flex flex-col">
            <h1 class="text-6xl font-bold text-jp-200">{{ data.contact.title}}</h1>
            <form @submit.prevent="submit">
              <div class="mt-6 flex phone:flex-col justify-between mr-8 fform">
                <div>
                  <input
                    v-model.trim="$v.form.firstname.$model"
                    type="text"
                    class="footer-input w-full"
                    :class="{ 'form-error': $v.form.firstname.$error }"
                    placeholder="First Name"
                  />
                  <p class="p-error" v-if="!$v.form.firstname.required">Please fill out this field.</p>
                  <p
                    class="p-error"
                    v-if="!$v.form.firstname.minLength"
                  >First name must have at least {{$v.form.firstname.$params.minLength.min}} letters.</p>
                </div>
                <div class="inline">
                  <input
                    v-model.trim="$v.form.lastname.$model"
                    type="text"
                    class="footer-input"
                    :class="{ 'form-error': $v.form.lastname.$error }"
                    placeholder="Last Name"
                  />
                  <p class="p-error" v-if="!$v.form.lastname.required">Please fill out this field.</p>
                  <p
                    class="p-error"
                    v-if="!$v.form.lastname.minLength"
                  >Last name must have at least {{$v.form.lastname.$params.minLength.min}} letters.</p>
                </div>
              </div>
              <div class="mt-12 phone:mt-0 flex phone:flex-col justify-between mr-8 fform">
                <div>
                  <input
                    v-model.trim="$v.form.email.$model"
                    type="email"
                    class="footer-input"
                    :class="{ 'form-error': $v.form.email.$error }"
                    placeholder="Email"
                  />
                  <p class="p-error" v-if="!$v.form.email.required">Please fill out this field.</p>
                  <p class="p-error" v-if="!$v.form.email.email">Please provide valid email address</p>
                </div>
                <div>
                  <input
                    v-model.trim="$v.form.phone.$model"
                    type="tel"
                    class="footer-input"
                    :class="{ 'form-error': $v.form.phone.$error }"
                    placeholder="Phone"
                  />
                  <p class="p-error" v-if="!$v.form.phone.required">Please fill out this field.</p>
                  <p
                    class="p-error"
                    v-else-if="!$v.form.phone.phoneValid"
                  >Please provide valid phone number</p>
                  <p
                    class="p-error"
                    v-else-if="!$v.form.phone.minLength"
                  >Phone number must have at least {{$v.form.phone.$params.minLength.min}} numbers.</p>
                </div>
              </div>
              <div class="mt-12 flex flex-col phone:items-center items-start justify-start">
                <div class="w-2/3 tab-port:w-1/2 phone:w-full">
                  <textarea
                    v-model.trim="$v.form.message.$model"
                    type="text"
                    class="footer-input focus:outline-none"
                    :class="{ 'form-error': $v.form.message.$error }"
                    placeholder="Message"
                    rows="3"
                  />
                  <p class="p-error" v-if="!$v.form.message.required">Please fill out this field.</p>
                  <p
                    class="p-error"
                    v-else-if="!$v.form.message.minLength"
                  >Message must have at least {{$v.form.message.$params.minLength.min}} letters.</p>
                </div>

                <button
                  type="submit"
                  href="#"
                  class="mt-12 phone:mt-16 w-auto focus:outline-none rounded-full py-4 px-16 text-white bg-gradient font-medium text-4xl"
                >Submit now</button>
              </div>
            </form>
          </div>
          <div class="w-1/2 tab-port:w-full min-h-full tab-port:h-128 phone:max-h-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.893598294081!2d159.9547363153973!3d-9.43073170132311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f285c78449b0bb7%3A0x476d8f151d3d1140!2sY.Sato%20Marine!5e0!3m2!1sen!2skg!4v1592199246533!5m2!1sen!2skg"
              class="h-full w-full"
              frameborder="0"
              style="border:0;"
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
        <div class="footer-gradient w-full flex flex-col px-40 items-center">
          <h1 class="text-5xl text-white font-bold text-center mt-22">Stay Connected With US</h1>

          <div class="flex phone:flex-col justify-between text-white w-full mt-8 mb-22">
            <div class="flex flex-col">
              <p
                href="#"
                class="font-semibold text-4lg phone:text-center phone:mt-2 phone:text-5lg"
              >Find us on:</p>
              <div class="flex justify-around phone:justify-center mt-2">
                <a href="https://www.facebook.com/iumicash" target="_blank">
                  <svg
                    class="w-12 h-12 phone:w-18 phone:h-18"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6948 30C23.9834 30 30.7026 23.2843 30.7026 15C30.7026 6.71573 23.9834 0 15.6948 0C7.40624 0 0.687012 6.71573 0.687012 15C0.687012 23.2843 7.40624 30 15.6948 30Z"
                      fill="#3B5998"
                    />
                    <path
                      d="M19.5532 15.4236H16.8144V25.3403H12.6649V15.4236H10.6914V11.9384H12.6649V9.68313C12.6649 8.07036 13.44 5.54492 16.8514 5.54492L19.925 5.55763V8.94056H17.6949C17.3291 8.94056 16.8147 9.1212 16.8147 9.89054V11.9417H19.9157L19.5532 15.4236Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="https://www.instagram.com/iumicash/" target="_blank">
                  <svg
                    class="w-12 h-12 phone:w-18 phone:h-18 phone:mx-3"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.1939 7.98047H11.2479C9.81994 7.98047 8.6582 9.14166 8.6582 10.5689V19.5108C8.6582 20.9381 9.81994 22.0996 11.2479 22.0996H20.1939C21.6219 22.0996 22.7839 20.9384 22.7839 19.5108V10.5689C22.7839 9.14166 21.6222 7.98047 20.1939 7.98047ZM15.7209 19.688C13.157 19.688 11.071 17.6029 11.071 15.0399C11.071 12.4772 13.157 10.3921 15.7209 10.3921C18.2851 10.3921 20.3712 12.4772 20.3712 15.0399C20.3712 17.6026 18.2848 19.688 15.7209 19.688ZM20.5207 11.3531C19.9137 11.3531 19.4201 10.8597 19.4201 10.2534C19.4201 9.64705 19.9137 9.15369 20.5207 9.15369C21.1273 9.15369 21.6209 9.64705 21.6209 10.2534C21.6209 10.8597 21.1273 11.3531 20.5207 11.3531Z"
                      fill="white"
                    />
                    <path
                      d="M15.7204 12.3569C14.2403 12.3569 13.0352 13.5608 13.0352 15.04C13.0352 16.5199 14.2403 17.7241 15.7204 17.7241C17.2011 17.7241 18.4053 16.5199 18.4053 15.04C18.4053 13.5611 17.2008 12.3569 15.7204 12.3569Z"
                      fill="white"
                    />
                    <path
                      d="M15.7207 0C7.43245 0 0.712891 6.71606 0.712891 15C0.712891 23.2839 7.43245 30 15.7207 30C24.009 30 30.7285 23.2839 30.7285 15C30.7285 6.71606 24.009 0 15.7207 0ZM24.7483 19.5111C24.7483 22.0215 22.7054 24.0634 20.1937 24.0634H11.2477C8.7363 24.0634 6.69307 22.0215 6.69307 19.5111V10.5698C6.69307 8.05967 8.7363 6.01751 11.2477 6.01751H20.1937C22.7054 6.01751 24.7483 8.05967 24.7483 10.5698V19.5111Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <!-- <a href="#">
                  <svg
                    class="w-12 h-12 phone:w-18 phone:h-18"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7471 30C24.0357 30 30.7549 23.2843 30.7549 15C30.7549 6.71573 24.0357 0 15.7471 0C7.45848 0 0.739258 6.71573 0.739258 15C0.739258 23.2843 7.45848 30 15.7471 30Z"
                      fill="#007AB9"
                    />
                    <path
                      d="M24.7148 16.2072V22.3916H21.1275V16.6217C21.1275 15.1729 20.6096 14.1835 19.3108 14.1835C18.3196 14.1835 17.7307 14.8496 17.4707 15.4946C17.3763 15.7251 17.3519 16.0452 17.3519 16.3684V22.3913H13.7643C13.7643 22.3913 13.8125 12.619 13.7643 11.6074H17.3522V13.1356C17.345 13.1476 17.3348 13.1594 17.3284 13.1709H17.3522V13.1356C17.8289 12.4024 18.6791 11.3542 20.5853 11.3542C22.9454 11.3542 24.7148 12.8955 24.7148 16.2072ZM10.0115 6.40918C8.7843 6.40918 7.98145 7.21432 7.98145 8.27215C7.98145 9.30751 8.76102 10.1359 9.96437 10.1359H9.98764C11.2389 10.1359 12.0169 9.30751 12.0169 8.27215C11.993 7.21432 11.2389 6.40918 10.0115 6.40918ZM8.19467 22.3916H11.7809V11.6074H8.19467V22.3916Z"
                      fill="#F1F2F2"
                    />
                  </svg>
                </a>-->
              </div>
            </div>
            <div class="flex flex-col items-center phone:mt-14">
              <p class="font-bold text-4lg phone:text-4xl text-center">Address:</p>
              <p class="text-4lg phone:text-4xl text-center mt-2" v-html="data.contact.address">
                <!-- C/- Baoro and Associates,
                <br class="phone:hidden" />Top Floor, Ysato Building,
                <br class="phone:hidden" />Commonwealth Street, Honiara.-->
              </p>
            </div>
            <div class="flex flex-col phone:flex-row phone:justify-between phone:mt-14">
              <router-link class="font-semibold text-4lg" to="/aml-policy">AML Statement</router-link>
              <router-link class="font-semibold text-4lg" to="/privacy-policy">Privacy Policy</router-link>
              <router-link class="font-semibold text-4lg" to="/terms-conditions">Terms & Conditions</router-link>

              <!-- <a href="#" class="font-semibold text-4lg">AML Policy</a> -->
              <!-- <a href="#" class="font-semibold text-4lg mt-4">Privacy Policy</a> -->
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://iumi.cash/wp-content/uploads/2020/06/shape2.png"
        class="absolute w-30vw top-0 left-0 h-full z-0"
        alt
      />
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
const isPhone = value => /^\+?[0-9]+$/.test(value);
const axios = require("axios");

import Accordion from "../components/Accordion";
import ScrollIcon from "../components/ScrollIcon";
import Modal from "../components/Modal";

export default {
  name: "Home",
  created() {
    axios.get("https://iumi.cash/wp-json/markers/v1/post").then(response => {
      response.data.forEach(element => {
        switch (element.post_name) {
          case "home":
            this.filterData(element.acf, this.data.home);
            break;
          case "features":
            this.filterData(element.acf, this.data.features);
            this.cards.forEach((element, index) => {
              element.title = this.data.features[`ft${index + 1}_title`];
              element.desc = this.data.features[`ft${index + 1}_desc`];
            });
            break;
          case "pricing":
            this.filterData(element.acf, this.data.pricing);
            break;
          case "faq":
            this.filterData(element.acf, this.data.faq);
            this.accordions.forEach((element, index) => {
              element.title = this.data.faq[`question_${index + 1}`];
              element.value = this.data.faq[`answer_${index + 1}`];
            });
            break;
          case "contact":
            this.filterData(element.acf, this.data.contact);
            break;
        }
      });
    });
  },
  components: {
    Accordion,
    ScrollIcon,
    Modal
  },

  data() {
    return {
      accordions: [
        {
          title: "",
          value: "",
          isActive: false
        },
        {
          title: "",
          value: "",
          isActive: false
        },
        {
          title: "",
          value: "",
          isActive: false
        },
        {
          title: "",
          value: "",
          isActive: false
        }
      ],
      showModal: false,
      cards: [
        {
          title: "",
          desc: "",
          svg: ` <path
                    d="M102.918 54.9672C106.403 52.5185 108.711 48.4451 108.711 43.8537C108.711 36.3426 102.636 30.2678 95.1247 30.2678C87.6136 30.2678 81.5388 36.3426 81.5388 43.8537C81.5388 48.4451 83.8227 52.5185 87.331 54.9672C84.3407 56.0033 81.6094 57.6044 79.3019 59.6764C76.1233 56.9686 72.3795 54.8966 68.2825 53.6722C73.2507 50.6584 76.5942 45.1722 76.5942 38.9326C76.5942 29.4202 68.8947 21.7207 59.3823 21.7207C49.8698 21.7207 42.1704 29.4437 42.1704 38.9326C42.1704 45.1722 45.4903 50.6584 50.482 53.6722C46.4321 54.8966 42.7355 56.9451 39.5803 59.6058C37.2729 57.5808 34.5886 56.0033 31.6454 54.9908C35.1302 52.542 37.4377 48.4686 37.4377 43.8772C37.4377 36.3661 31.3629 30.2913 23.8518 30.2913C16.3407 30.2913 10.2659 36.3661 10.2659 43.8772C10.2659 48.4686 12.5499 52.542 16.0582 54.9908C6.71053 58.2166 0 67.0933 0 77.524V79.0781C0 79.1252 0.0470914 79.1722 0.0941828 79.1722H28.8906C28.7258 80.4673 28.6316 81.8094 28.6316 83.1515V84.7526C28.6316 91.675 34.2355 97.2789 41.1579 97.2789H77.6537C84.5762 97.2789 90.1801 91.675 90.1801 84.7526V83.1515C90.1801 81.8094 90.0859 80.4673 89.9211 79.1722H118.906C118.953 79.1722 119 79.1252 119 79.0781V77.524C118.953 67.0697 112.266 58.193 102.918 54.9672ZM85.3061 43.8301C85.3061 38.4146 89.7091 34.0116 95.1247 34.0116C100.54 34.0116 104.943 38.4146 104.943 43.8301C104.943 49.175 100.634 53.531 95.313 53.6487C95.2424 53.6487 95.1953 53.6487 95.1247 53.6487C95.054 53.6487 95.0069 53.6487 94.9363 53.6487C89.5914 53.5545 85.3061 49.1985 85.3061 43.8301ZM45.8906 38.9326C45.8906 31.5157 51.9183 25.488 59.3352 25.488C66.7521 25.488 72.7798 31.5157 72.7798 38.9326C72.7798 46.0905 67.1524 51.9534 60.1122 52.3537C59.8532 52.3537 59.5942 52.3537 59.3352 52.3537C59.0762 52.3537 58.8172 52.3537 58.5582 52.3537C51.518 51.9534 45.8906 46.0905 45.8906 38.9326ZM13.9626 43.8301C13.9626 38.4146 18.3657 34.0116 23.7812 34.0116C29.1967 34.0116 33.5997 38.4146 33.5997 43.8301C33.5997 49.175 29.2909 53.531 23.9695 53.6487C23.8989 53.6487 23.8518 53.6487 23.7812 53.6487C23.7105 53.6487 23.6634 53.6487 23.5928 53.6487C18.2715 53.5545 13.9626 49.1985 13.9626 43.8301ZM29.5499 75.3814H3.8144C4.87396 65.3509 13.3504 57.4866 23.6399 57.416C23.687 57.416 23.7341 57.416 23.7812 57.416C23.8283 57.416 23.8753 57.416 23.9224 57.416C28.8199 57.4395 33.2936 59.2526 36.7548 62.1958C33.3643 65.8689 30.8449 70.3897 29.5499 75.3814ZM86.3656 84.7526C86.3656 89.5794 82.4335 93.5116 77.6067 93.5116H41.1108C36.2839 93.5116 32.3518 89.5794 32.3518 84.7526V83.1515C32.3518 68.5296 44.0305 56.5684 58.5582 56.1445C58.8172 56.1681 59.0997 56.1681 59.3587 56.1681C59.6177 56.1681 59.9003 56.1681 60.1593 56.1445C74.687 56.5684 86.3656 68.5296 86.3656 83.1515V84.7526ZM89.1676 75.3814C87.8726 70.4132 85.4003 65.9631 82.0332 62.29C85.518 59.2761 90.0388 57.4631 94.9834 57.416C95.0305 57.416 95.0776 57.416 95.1247 57.416C95.1717 57.416 95.2188 57.416 95.2659 57.416C105.555 57.4866 114.032 65.3509 115.091 75.3814H89.1676Z"
                  />`
        },
        {
          title: "",
          desc: "",
          svg: `   <path
                    d="M108.31 103.38L95.8257 87.3296C99.8712 86.1209 103.366 83.5336 105.703 80.0172C108.643 74.9351 107.313 68.7328 106.027 62.7417C105.249 59.6641 104.784 56.5158 104.638 53.3448C104.783 50.1711 105.248 47.0199 106.027 43.9397C107.305 37.9446 108.643 31.7463 105.703 26.6724C102.658 21.4118 96.5274 19.4647 90.5979 17.5853C87.6462 16.7721 84.7877 15.6526 82.0689 14.2451C79.6017 12.6448 77.3109 10.788 75.2346 8.70547C70.8357 4.62253 65.8479 0 59.4999 0C53.1519 0 48.1641 4.62253 43.7632 8.70341C41.6876 10.7864 39.3974 12.644 36.931 14.2451C34.2124 15.6498 31.3546 16.7664 28.404 17.5771C22.4745 19.4565 16.3439 21.4036 13.2992 26.6642C10.3591 31.7463 11.6886 37.9487 12.975 43.9397C13.7529 47.0201 14.2176 50.1711 14.362 53.3448C14.2168 56.5186 13.7516 59.6698 12.973 62.7499C11.6947 68.7451 10.357 74.9433 13.2971 80.0172C15.6371 83.5349 19.1356 86.1214 23.1844 87.3275L10.6894 103.378C9.99386 104.273 10.1552 105.562 11.05 106.257C11.4798 106.591 12.0246 106.741 12.5647 106.673L27.2345 104.841L30.8558 117.513C31.0679 118.255 31.6793 118.816 32.4377 118.963C32.5662 118.987 32.6967 119 32.8275 119C33.461 119.001 34.0593 118.708 34.4484 118.208L47.5507 101.355C50.775 104.494 55.0102 106.385 59.4999 106.69C63.9896 106.385 68.2249 104.494 71.4492 101.355L84.5515 118.202C84.9392 118.704 85.5376 118.999 86.1723 119C86.3031 119 86.4337 118.987 86.5622 118.963C87.3205 118.816 87.9319 118.255 88.144 117.513L91.7653 104.843L106.435 106.675C107.56 106.816 108.585 106.019 108.726 104.895C108.794 104.355 108.645 103.81 108.31 103.38ZM33.6892 112.498L30.6958 102.022C30.4175 101.05 29.4727 100.426 28.4696 100.551L16.98 101.987L27.2776 88.7494L28.4122 89.1125C31.36 89.9237 34.215 91.0404 36.931 92.4445C39.3981 94.0449 41.6889 95.9017 43.7652 97.9842L44.471 98.6366L33.6892 112.498ZM59.4999 102.586C54.7604 102.586 50.7739 98.8931 46.5515 94.9784C44.2543 92.6833 41.7169 90.6426 38.9827 88.891C36.0079 87.3337 32.8765 86.0957 29.6412 85.1979C24.2185 83.4765 19.0953 81.8515 16.8466 77.9655C14.7005 74.254 15.8084 69.0816 16.9841 63.6035C17.8302 60.244 18.3267 56.8063 18.4654 53.3448C18.3275 49.8833 17.8317 46.4456 16.9861 43.0862C15.8105 37.6102 14.7026 32.4378 16.8487 28.7241C19.1056 24.8382 24.2205 23.2132 29.6432 21.4918C32.878 20.5937 36.0084 19.3557 38.9827 17.7987C41.7161 16.047 44.253 14.0061 46.5494 11.7112C50.7739 7.79655 54.7604 4.10345 59.4999 4.10345C64.2394 4.10345 68.2259 7.79655 72.4483 11.7112C74.7455 14.0064 77.283 16.047 80.0172 17.7987C82.9919 19.356 86.1234 20.5939 89.3587 21.4918C94.7814 23.2132 99.9045 24.8382 102.153 28.7241C104.299 32.4357 103.191 37.6081 102.016 43.0862C101.17 46.4456 100.673 49.8833 100.534 53.3448C100.672 56.8063 101.168 60.244 102.014 63.6035C103.189 69.0795 104.297 74.2519 102.151 77.9655C99.8943 81.8515 94.7793 83.4765 89.3566 85.1979C86.1218 86.096 82.9914 87.334 80.0172 88.891C77.2838 90.6426 74.7468 92.6836 72.4504 94.9784C68.2259 98.8931 64.2394 102.586 59.4999 102.586ZM90.5405 100.551C89.5374 100.426 88.5926 101.05 88.3143 102.022L85.3106 112.498L74.5308 98.6387L75.2366 97.9862C77.3122 95.9032 79.6025 94.0456 82.0689 92.4445C84.7874 91.0399 87.6452 89.9232 90.5958 89.1125L91.7305 88.7494L102.03 101.987L90.5405 100.551Z"
                  />
                  <path
                    d="M59.4999 16.4141C39.1034 16.4141 22.5688 32.9487 22.5688 53.3451C22.5688 73.7416 39.1034 90.2761 59.4999 90.2761C79.8963 90.2761 96.4309 73.7416 96.4309 53.3451C96.4073 32.9584 79.8866 16.4379 59.4999 16.4141ZM59.4999 86.1727C41.3698 86.1727 26.6723 71.4752 26.6723 53.3451C26.6723 35.215 41.3698 20.5175 59.4999 20.5175C77.6299 20.5175 92.3275 35.215 92.3275 53.3451C92.3059 71.4664 77.6212 86.1512 59.4999 86.1727Z"
                  />
                  <path
                    d="M83.1726 44.7748C82.4006 43.7143 81.1686 43.0868 79.857 43.0863H67.2964L63.3981 31.1309C62.6905 28.9778 60.3715 27.8063 58.2185 28.5139C56.98 28.9209 56.0086 29.8924 55.6015 31.1309L51.7135 43.0863H39.1426C36.8762 43.0852 35.0381 44.9213 35.0371 47.1877C35.0363 48.5008 35.6642 49.7346 36.7257 50.5074L46.894 57.8936L43.0101 69.849C42.3094 72.0043 43.4889 74.3194 45.644 75.0198C46.8938 75.4261 48.2623 75.2091 49.3253 74.4366L59.4998 67.0525L69.6702 74.4387C71.1028 75.503 73.0632 75.503 74.4959 74.4387C75.9498 73.4054 76.555 71.5414 75.9854 69.851L72.1015 57.8936L82.2698 50.5074C84.1023 49.1737 84.5065 46.607 83.1726 44.7748ZM68.4823 55.452C67.7626 55.9749 67.4618 56.9021 67.7375 57.7479L72.083 71.121L60.7062 62.8567C59.9874 62.3348 59.0143 62.3348 58.2955 62.8567L46.9186 71.121L51.2621 57.7479C51.5368 56.9026 51.2362 55.9767 50.5174 55.4541L39.1426 47.1897H53.2031C54.092 47.1897 54.8796 46.6173 55.1543 45.772L59.4998 32.3988L63.8454 45.7699C64.12 46.6152 64.9076 47.1877 65.7966 47.1877L79.857 47.1897L68.4823 55.452Z"
                  />`
        },
        {
          title: "",
          desc: "",
          svg: ` <path d="M44.4815 96.9039C56.2734 96.9039 65.8667 87.3106 65.8667 75.5186C65.8667 63.7266 56.2734 54.1333 44.4815 54.1333C32.6895 54.1333 23.0962 63.7266 23.0962 75.5186C23.0962 87.3106 32.6898 96.9039 44.4815 96.9039ZM44.4815 57.7993C54.252 57.7993 62.2007 65.7481 62.2007 75.5186C62.2007 85.2891 54.252 93.2378 44.4815 93.2378C34.711 93.2378 26.7622 85.2891 26.7622 75.5186C26.7622 65.7481 34.7112 57.7993 44.4815 57.7993Z" />
                  <path d="M18.9414 75.5187C18.9414 61.4357 30.3986 49.9785 44.4816 49.9785C48.3123 49.9785 51.995 50.8054 55.4272 52.436C56.3415 52.8703 57.4349 52.4812 57.8695 51.5669C58.3038 50.6526 57.9149 49.5592 57.0004 49.1246C53.0728 47.2586 48.861 46.3125 44.4816 46.3125C28.3771 46.3125 15.2754 59.4142 15.2754 75.5187C15.2754 82.1491 17.4415 88.3997 21.5394 93.5942C21.9012 94.0527 22.4379 94.292 22.9797 94.292C23.3771 94.292 23.7774 94.1632 24.1137 93.898C24.9085 93.2711 25.0447 92.1185 24.4175 91.3237C20.8351 86.7825 18.9414 81.3171 18.9414 75.5187Z" />
                  <path d="M68.4336 62.1309C67.5193 62.5652 67.1302 63.6587 67.5645 64.5732C69.1949 68.0054 70.0215 71.6878 70.0215 75.5183C70.0215 89.6013 58.5644 101.058 44.4814 101.058C38.6812 101.058 33.2146 99.1638 28.6729 95.5794C27.8783 94.9525 26.7257 95.0884 26.0983 95.8827C25.4712 96.6775 25.6068 97.8301 26.4016 98.4573C31.5969 102.557 37.8488 104.725 44.4814 104.725C60.5858 104.725 73.6875 91.6228 73.6875 75.5183C73.6875 71.1394 72.7415 66.9278 70.8759 63C70.4416 62.0859 69.3484 61.6964 68.4336 62.1309Z" />
                  <path d="M60.9032 55.9568C62.0357 56.9087 63.0925 57.9658 64.0445 59.0984C64.4069 59.5297 64.926 59.7521 65.4488 59.7521C65.865 59.7521 66.2837 59.6111 66.6271 59.3225C67.4021 58.6711 67.5025 57.5149 66.8512 56.7399C65.7639 55.4457 64.5563 54.2381 63.2622 53.1506C62.4869 52.499 61.3309 52.5997 60.6795 53.3744C60.028 54.1492 60.1282 55.3055 60.9032 55.9568Z" />
                  <path d="M119.127 30.5037L114.702 27.782C114.755 26.8227 114.743 25.8661 114.668 24.9198L119.018 22.0806C119.671 21.6543 119.983 20.8613 119.795 20.1043C119.076 17.2067 117.896 14.4623 116.287 11.9471C115.867 11.2902 115.077 10.9703 114.318 11.1519L109.265 12.3563C108.63 11.6507 107.944 10.9839 107.211 10.3624L108.28 5.27836C108.44 4.51484 108.1 3.73373 107.432 3.3312C106.041 2.49338 104.739 1.83692 103.452 1.32391C102.164 0.810424 100.767 0.391517 99.1825 0.0429981C98.4203 -0.124907 97.6362 0.208703 97.2276 0.872991L94.5059 5.29815C93.5466 5.24536 92.59 5.25685 91.6437 5.33213L88.8045 0.982239C88.378 0.329194 87.5849 0.0168469 86.8282 0.205037C83.9306 0.923583 81.1862 2.10381 78.671 3.71271C78.0141 4.13308 77.6949 4.923 77.8757 5.68187L79.0801 10.7351C78.3741 11.3701 77.7078 12.0566 77.0863 12.7889L72.0022 11.7203C71.2385 11.56 70.4576 11.9002 70.0551 12.5684C69.2173 13.9591 68.5608 15.261 68.0478 16.548C67.5343 17.8363 67.1154 19.2328 66.7669 20.8175C66.5995 21.5793 66.9323 22.3638 67.5969 22.7725L72.022 25.4942C71.9692 26.4534 71.9807 27.41 72.0562 28.3564L67.7061 31.1956C67.0528 31.6221 66.741 32.4149 66.9289 33.1718C67.5084 35.5081 68.3929 37.7422 69.5548 39.8389L65.1541 42.4772C64.4157 42.0219 63.6214 41.572 62.7589 41.1206L62.8464 35.8307C62.8589 35.0799 62.4119 34.3973 61.7187 34.1084C58.0752 32.5902 54.216 31.5615 50.2484 31.0514C49.5047 30.9563 48.7768 31.3234 48.4124 31.9794L45.8548 36.584C44.9637 36.5292 43.999 36.5292 43.1079 36.584L40.5502 31.9794C40.1861 31.3234 39.4585 30.9571 38.7143 31.0514C34.7466 31.5615 30.8875 32.5899 27.2439 34.1084C26.5508 34.3973 26.1038 35.0799 26.1163 35.8307L26.2038 41.1206C25.3413 41.572 24.547 42.0219 23.8086 42.4772L19.3055 39.7771C18.6607 39.3902 17.8454 39.4366 17.2486 39.8937C14.0946 42.3081 11.2712 45.1315 8.85676 48.2855C8.39973 48.8823 8.35353 49.6977 8.74018 50.3424L11.4403 54.8455C10.985 55.5841 10.5351 56.3782 10.0839 57.2407L4.79405 57.1532C4.0557 57.1412 3.36062 57.5875 3.07174 58.2808C1.55302 61.9244 0.524567 65.7835 0.0144975 69.7512C-0.0810641 70.4954 0.286518 71.2227 0.942496 71.5871L5.54705 74.1448C5.51968 74.5904 5.49891 75.0474 5.49891 75.5184C5.49891 75.9893 5.51968 76.4461 5.54705 76.8919L0.942496 79.4496C0.286518 79.814 -0.0810641 80.5413 0.0144975 81.2855C0.524567 85.2532 1.55302 89.1123 3.07149 92.7559C3.36038 93.449 4.04495 93.8904 4.7938 93.8835L10.0837 93.7961C10.5351 94.6585 10.985 95.4529 11.4403 96.1912L8.74018 100.694C8.35353 101.339 8.39973 102.154 8.85676 102.751C11.2712 105.905 14.0946 108.729 17.2486 111.143C17.8454 111.6 18.661 111.647 19.3055 111.26L23.8086 108.559C24.547 109.015 25.3413 109.465 26.2038 109.916L26.1163 115.206C26.1038 115.957 26.5508 116.639 27.2439 116.928C30.8875 118.447 34.7466 119.475 38.7143 119.985C39.4578 120.08 40.1858 119.713 40.5502 119.057L43.1079 114.453C43.999 114.508 44.9637 114.508 45.8548 114.453L48.4124 119.057C48.7382 119.644 49.3549 120 50.0143 120C50.092 120 50.1702 119.995 50.2484 119.985C54.216 119.475 58.0752 118.447 61.7187 116.928C62.4119 116.639 62.8589 115.957 62.8464 115.206L62.7589 109.916C63.6214 109.465 64.4157 109.015 65.1541 108.559L69.6572 111.26C70.3017 111.646 71.117 111.6 71.7141 111.143C74.8681 108.729 77.6914 105.905 80.1059 102.751C80.5629 102.154 80.6091 101.339 80.2225 100.694L77.5223 96.1912C77.9776 95.4529 78.4276 94.6585 78.879 93.7961L84.1689 93.8835C84.9219 93.8877 85.6023 93.449 85.8912 92.7559C87.4097 89.1123 88.4381 85.2532 88.9482 81.2855C89.0437 80.5413 88.6761 79.814 88.0202 79.4496L83.4156 76.8919C83.443 76.4464 83.4638 75.9896 83.4638 75.5184C83.4638 75.0471 83.443 74.5904 83.4156 74.1448L88.0202 71.5871C88.6761 71.2227 89.0437 70.4954 88.9482 69.7512C88.4381 65.7835 87.4097 61.9244 85.8912 58.2808C85.6023 57.5877 84.9155 57.1471 84.1689 57.1532L78.879 57.2407C78.4276 56.3782 77.9779 55.5841 77.5226 54.8455L80.1592 50.4485C81.2299 51.0509 82.2559 51.5471 83.2719 51.9518C84.5599 52.4653 85.9564 52.8842 87.5414 53.2327C87.6726 53.2615 87.8046 53.2755 87.9351 53.2755C88.5623 53.2755 89.1579 52.9526 89.4961 52.4027L92.218 47.9775C93.1771 48.0306 94.1337 48.0188 95.0802 47.9433L97.9195 52.2937C98.3457 52.9467 99.1388 53.2586 99.8957 53.0709C102.793 52.3521 105.538 51.1719 108.053 49.5632C108.71 49.1429 109.029 48.3527 108.848 47.5941L107.644 42.5408C108.35 41.9058 109.016 41.2196 109.638 40.4871L114.722 41.5556C115.485 41.715 116.266 41.376 116.669 40.7075C117.507 39.3169 118.163 38.0149 118.676 36.7279C119.19 35.4399 119.609 34.0434 119.957 32.4584C120.124 31.6966 119.791 30.9121 119.127 30.5037ZM77.7946 60.9253L82.9652 60.8395C83.9636 63.4602 84.6914 66.1941 85.1362 68.9952L80.6189 71.5048C79.9998 71.8486 79.6345 72.5181 79.6799 73.2249C79.6909 73.3957 79.7026 73.5666 79.7146 73.7374C79.7574 74.355 79.798 74.9386 79.798 75.5184C79.798 76.0981 79.7574 76.6815 79.7146 77.2991C79.7029 77.4699 79.6909 77.6408 79.6799 77.8118C79.6345 78.5187 80.0001 79.1881 80.6189 79.5319L85.1362 82.0415C84.6914 84.8426 83.9636 87.5765 82.9652 90.1972L77.7946 90.1117C77.0848 90.1021 76.435 90.4971 76.1212 91.1318C75.3528 92.6852 74.6073 93.996 73.8421 95.1386C73.4474 95.7283 73.4283 96.4928 73.7932 97.1011L76.4276 101.495C74.6464 103.682 72.645 105.684 70.4574 107.465L66.064 104.83C65.4552 104.465 64.6907 104.485 64.1014 104.879C62.9588 105.644 61.6481 106.39 60.0947 107.158C59.4599 107.472 59.0628 108.124 59.0745 108.832L59.1601 114.002C56.5393 115.001 53.8054 115.729 51.0043 116.173L48.4948 111.656C48.1702 111.072 47.5553 110.713 46.8927 110.713C46.8536 110.713 46.814 110.714 46.7747 110.717C46.6036 110.728 46.433 110.74 46.2619 110.752C45.6443 110.795 45.0609 110.835 44.4812 110.835C43.9015 110.835 43.3181 110.795 42.7005 110.752C42.5297 110.74 42.3588 110.728 42.1877 110.717C41.4785 110.669 40.8115 111.037 40.4676 111.656L37.9581 116.173C35.157 115.729 32.4231 115.001 29.8024 114.002L29.8879 108.832C29.8996 108.124 29.5025 107.472 28.8678 107.158C27.3143 106.39 26.0036 105.644 24.861 104.879C24.2715 104.485 23.507 104.466 22.8985 104.83L18.5051 107.465C16.3172 105.684 14.3158 103.682 12.5348 101.495L15.1692 97.1011C15.5341 96.4926 15.515 95.7281 15.1203 95.1386C14.3551 93.996 13.6097 92.6852 12.8413 91.1318C12.5275 90.4971 11.8849 90.1056 11.1678 90.1117L5.99724 90.1972C4.99886 87.5765 4.27102 84.8426 3.82621 82.0415L8.34351 79.5319C8.96259 79.1881 9.32797 78.5187 9.28251 77.8118C9.27151 77.6408 9.25978 77.4702 9.24781 77.2991C9.20504 76.6815 9.16446 76.0981 9.16446 75.5184C9.16446 74.9384 9.20504 74.355 9.24781 73.7374C9.25954 73.5666 9.27151 73.396 9.28251 73.2249C9.32797 72.5181 8.96234 71.8486 8.34351 71.5048L3.82621 68.9952C4.27102 66.1941 4.99861 63.4602 5.99724 60.8395L11.1678 60.9253C11.8754 60.9334 12.5275 60.5399 12.8413 59.9052C13.6094 58.3522 14.3549 57.0415 15.1203 55.8982C15.515 55.3087 15.5341 54.5442 15.1692 53.9356L12.5348 49.5422C14.316 47.3543 16.3174 45.3529 18.5051 43.5719L22.8985 46.2064C23.5068 46.5715 24.2715 46.5522 24.861 46.1575C26.0036 45.3922 27.3143 44.6468 28.8678 43.8784C29.5025 43.5646 29.8996 42.913 29.8879 42.205L29.8024 37.0344C32.4231 36.036 35.157 35.3082 37.9581 34.8634L40.4676 39.3807C40.8113 39.9995 41.4797 40.3676 42.1877 40.3197C42.3588 40.3087 42.5294 40.2969 42.7005 40.285C43.3181 40.2422 43.9015 40.2016 44.4812 40.2016C45.0609 40.2016 45.6443 40.2422 46.2619 40.285C46.4328 40.2967 46.6036 40.3087 46.7747 40.3197C47.4818 40.3651 48.1509 39.9995 48.4948 39.3807L51.0043 34.8634C53.8054 35.3082 56.5393 36.036 59.1601 37.0344L59.0745 42.205C59.0628 42.913 59.4599 43.5646 60.0947 43.8784C61.6481 44.6468 62.9588 45.3922 64.1014 46.1575C64.6909 46.5522 65.4556 46.5715 66.064 46.2064L70.4574 43.5719C72.6453 45.3531 74.6467 47.3546 76.4276 49.5422L73.7932 53.9356C73.4283 54.5442 73.4474 55.3087 73.8421 55.8982C74.6076 57.0415 75.353 58.352 76.1212 59.9052C76.4352 60.5399 77.0802 60.9338 77.7946 60.9253ZM73.9795 41.7487L77.4585 40.9194C78.0937 41.6253 78.78 42.2917 79.5125 42.9133L78.7385 46.5959C77.275 44.8638 75.6864 43.241 73.9795 41.7487ZM115.27 35.3707C114.97 36.1255 114.607 36.8931 114.172 37.694L109.291 36.6683C108.597 36.5224 107.882 36.7893 107.454 37.3533C106.572 38.5143 105.562 39.5539 104.454 40.4428C103.901 40.8859 103.653 41.6086 103.817 42.2979L104.971 47.1407C103.477 47.9861 101.899 48.6648 100.257 49.168L97.5363 44.9988C97.1489 44.4053 96.4545 44.0879 95.7521 44.1847C94.3436 44.378 92.8948 44.3956 91.4452 44.237C90.7404 44.1605 90.0556 44.4955 89.6846 45.0987L87.0714 49.3472C86.1911 49.1121 85.3845 48.8474 84.6291 48.5463C83.8744 48.2454 83.1067 47.8827 82.3058 47.4477L83.3315 42.5665C83.4772 41.8733 83.2103 41.1582 82.6465 40.7298C81.4856 39.848 80.4461 38.8383 79.5567 37.7292C79.1134 37.1761 78.3912 36.9281 77.7017 37.0928L72.8589 38.2471C72.0135 36.7526 71.335 35.1747 70.8318 33.5328L75.0011 30.8119C75.5947 30.4245 75.9117 29.7297 75.8152 29.0275C75.6218 27.6197 75.6042 26.1709 75.7629 24.7211C75.8399 24.017 75.5043 23.3314 74.9011 22.9604L70.6526 20.3473C70.8878 19.4669 71.1524 18.6604 71.4535 17.905C71.7544 17.1502 72.1171 16.3826 72.5521 15.5817L77.4331 16.6074C78.126 16.7528 78.8414 16.4862 79.2698 15.9224C80.1514 14.7614 81.161 13.7222 82.2701 12.8329C82.8232 12.3895 83.071 11.6671 82.9068 10.9776L81.7524 6.13475C83.2472 5.28936 84.8248 4.61089 86.4667 4.10767L89.1877 8.2767C89.5748 8.87011 90.2687 9.18685 90.9721 9.0908C92.3793 8.89772 93.8284 8.88013 95.2785 9.0385C95.9823 9.11524 96.6681 8.77992 97.0391 8.17674L99.6523 3.92828C100.533 4.16339 101.339 4.42808 102.095 4.72918C102.849 5.03004 103.617 5.39274 104.418 5.82778L103.392 10.709C103.246 11.4021 103.513 12.1172 104.077 12.5457C105.239 13.428 106.278 14.4376 107.167 15.5462C107.61 16.0993 108.332 16.3466 109.022 16.1826L113.865 15.0283C114.71 16.5231 115.389 18.1007 115.892 19.7426L111.723 22.4636C111.129 22.8509 110.812 23.5458 110.909 24.248C111.102 25.656 111.119 27.1048 110.961 28.5543C110.884 29.2585 111.22 29.944 111.823 30.315L116.071 32.9282C115.836 33.8085 115.571 34.6153 115.27 35.3707Z"/>
                  <path d="M97.6607 15.8538C91.7139 13.4835 84.9486 16.3929 82.5784 22.3392C80.2081 28.2856 83.1175 35.0516 89.0639 37.4216C90.4694 37.9818 91.92 38.247 93.3483 38.247C97.9623 38.247 102.336 35.4767 104.146 30.9359C106.516 24.9898 103.607 18.2237 97.6607 15.8538ZM100.741 29.5787C99.1191 33.647 94.4899 35.6377 90.421 34.0161C86.3527 32.3942 84.3618 27.765 85.9836 23.6964C87.222 20.5896 90.2148 18.6942 93.372 18.6942C94.3491 18.6942 95.3419 18.8758 96.3033 19.259C100.372 20.8809 102.363 25.5101 100.741 29.5787Z" />`
        }
      ],
      data: {
        home: {
          slogan: "",
          appstore_link: "",
          playstore_link: ""
        },
        features: {
          title: "",
          description: "",
          ft1_title: "",
          ft1_desc: "",
          ft2_title: "",
          ft2_desc: "",
          ft3_title: "",
          ft3_desc: ""
        },
        pricing: {
          title: "",
          description: "",
          card1_title: "",
          card1_desc: "",
          card2_title: "",
          card2_desc: ""
        },
        faq: {
          title: "",
          question_1: "",
          answer_1: "",
          question_2: "",
          answer_2: "",
          question_3: "",
          answer_3: "",
          question_4: "",
          answer_4: ""
        },
        contact: {
          title: "",
          address: ""
        }
      },
      form: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
      },
      showSuccess: false
    };
  },
  validations: {
    form: {
      firstname: {
        required,
        minLength: minLength(3)
      },
      lastname: {
        required,
        minLength: minLength(3)
      },
      email: { required, email },
      phone: { required, phoneValid: isPhone, minLength: minLength(5) },
      message: { required, minLength: minLength(5) }
    }
  },
  methods: {
    submit() {
      const formData = new FormData();

      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        formData.append("your-firstname", this.form.firstname);
        formData.append("your-lastname", this.form.lastname);
        formData.append("your-phone", this.form.phone);
        formData.append("your-email", this.form.email);
        formData.append("your-message", this.form.message);

        axios
          .post(
            "https://iumi.cash/wp-json/contact-form-7/v1/contact-forms/220/feedback",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          )
          .then(result => {
            this.showSuccess = true;
            this.form.firstname = "";
            this.form.lastname = "";
            this.form.phone = "";
            this.form.email = "";
            this.form.message = "";
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log("error");
      }
    },
    filterData(acf, data) {
      for (const [key, value] of Object.entries(acf)) {
        if (value != "") {
          // data[key] = `<span>${value}</span>`;
          data[key] = value;
        }
      }
    }
  }
};
</script>
<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 10s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>