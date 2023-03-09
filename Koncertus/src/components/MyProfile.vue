<template>
  <div class="wrapper marginTop">
    <h2 class="uppercase">My Profile</h2>
    <div class="profileInfoAndNotifications">
      <div class="profileInfo">
        <div class="profilePicture" />
        <div class="profileInfoContent">
          <font-awesome-icon
            icon="fa-solid fa-user"
            class="paddingIconForm"
          /><input type="text" value="Jane Doe" disabled />
          <hr />
          <br />
          <font-awesome-icon
            icon="fa-solid fa-envelope"
            class="paddingIconForm"
          /><input type="email" value="jane.doe@gmail.com" disabled />
          <hr />
          <br />
          <font-awesome-icon
            icon="fa-solid fa-lock"
            class="paddingIconForm"
          /><input type="password" value="lozinka123" disabled />
          <hr />
        </div>
        <div class="verticalLine" />
        <div class="socialMediaProfile">
          <font-awesome-icon
            icon="fa-brands fa-facebook"
            class="socialMediaIconsSizeProfile"
          />
          <br />
          <br />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="socialMediaIconsSizeProfile notFirst"
          />
          <br />
          <br />
          <font-awesome-icon
            icon="fa-brands fa-instagram"
            class="socialMediaIconsSizeProfile notFirst"
          />
        </div>
      </div>
      <div class="notifications">
        <p class="uppercase bold nextConcertTitle">Next concerts</p>
        <div class="nextConcertProfile">
          <div class="nextConcertImage" />
          <div class="nextConcertContent">
            <h3 class="uppercase bold">Disturbed</h3>
            <p class="marginTopNextConcerts">
              <font-awesome-icon
                icon="fa-solid fa-calendar"
                class="paddingRightCardIcon"
              />
              05.02.2023.
            </p>
            <p class="marginTopNextConcerts">
              <font-awesome-icon
                icon="fa-solid fa-clock"
                class="paddingRightCardIcon"
              />
              20:15
            </p>
            <p class="marginTopNextConcerts">
              <font-awesome-icon
                icon="fa-solid fa-location-dot"
                class="paddingRightCardIcon"
              />
              Arena Zagreb
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="topFiveAndReservations">
        <div class="topFive"></div>
        <div class="myReservations"></div>
    </div>
  </div>
</template>
