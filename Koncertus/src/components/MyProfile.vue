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
      <div class="topFive">
        <h2 class="uppercase favoriteTitle">Favorite artists</h2>
        <div class="artistProfile">
          <div class="artistImageProfile" />
          <p class="uppercase artistName">Disturbed</p>
        </div>
        <div class="artistProfile">
          <div class="artistImageProfile" />
          <p class="uppercase artistName">Disturbed</p>
        </div>
        <div class="artistProfile">
          <div class="artistImageProfile" />
          <p class="uppercase artistName">Disturbed</p>
        </div>
        <div class="artistProfile">
          <div class="artistImageProfile" />
          <p class="uppercase artistName">Disturbed</p>
        </div>
        <div class="artistProfile">
          <div class="artistImageProfile" />
          <p class="uppercase artistName">Disturbed</p>
        </div>
        <div class="artistProfile">
          <div class="artistImageProfile" />
          <p class="uppercase artistName">Disturbed</p>
        </div>
        <div class="artistProfile">
          <div class="artistImageProfile" />
          <p class="uppercase artistName">Disturbed</p>
        </div>
      </div>
      <div class="myReservations">
        <div class="sameLine">
          <h2 class="uppercase favoriteTitle">My reservations</h2>
          <div>
            <font-awesome-icon
              icon="fa-solid fa-magnifying-glass"
              class="paddingRightCardIcon"
            />
            <input
              type="search"
              name="searchReservation"
              class="searchbar"
              placeholder="Search concerts, artist,..."
            />
          </div>
        </div>
        <div class="reservationContainer inline">
          <div class="paddingIcons paddingTopDateReservation">
            <p class="bold">16</p>
            <p class="bold">NOV</p>
          </div>
          <div
            class="inline paddingIcons paddingTopContent widthContentReservation"
          >
            <div class="concertImageReservation" />
            <div class="paddingIcons">
              <p class="bold">DISTURBED</p>
              <p class="descriptionFontSize">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sed enim eu leo dignissim elementum ut a urna.
              </p>
              <div class="inline iconFontSize iconPaddingReservation">
                <p>
                  <font-awesome-icon icon="fa-solid fa-calendar" />
                  16.11.2023.
                </p>
                <p>
                  <font-awesome-icon
                    icon="fa-solid fa-clock"
                    class="paddingIcons"
                  />21:45
                </p>
                <p>
                  <font-awesome-icon
                    icon="fa-solid fa-location-dot"
                    class="paddingIcons"
                  />Arena Zagreb
                </p>
                <p class="paddingIcons">Price: 100 EUR</p>
              </div>
            </div>
            <div class="buttonPositionReservation">
              <button class="blueButton">BUY</button>
            </div>
          </div>
        </div>        
        <div class="reservationContainer inline">
          <div class="paddingIcons paddingTopDateReservation">
            <p class="bold">16</p>
            <p class="bold">NOV</p>
          </div>
          <div
            class="inline paddingIcons paddingTopContent widthContentReservation"
          >
            <div class="concertImageReservation" />
            <div class="paddingIcons">
              <p class="bold">DISTURBED</p>
              <p class="descriptionFontSize">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sed enim eu leo dignissim elementum ut a urna.
              </p>
              <div class="inline iconFontSize iconPaddingReservation">
                <p>
                  <font-awesome-icon icon="fa-solid fa-calendar" />
                  16.11.2023.
                </p>
                <p>
                  <font-awesome-icon
                    icon="fa-solid fa-clock"
                    class="paddingIcons"
                  />21:45
                </p>
                <p>
                  <font-awesome-icon
                    icon="fa-solid fa-location-dot"
                    class="paddingIcons"
                  />Arena Zagreb
                </p>
                <p class="paddingIcons">Price: 100 EUR</p>
              </div>
            </div>
            <div class="buttonPositionReservation">
              <button class="blueButton">BUY</button>
            </div>
          </div>
        </div>        
        <div class="reservationContainer inline">
          <div class="paddingIcons paddingTopDateReservation">
            <p class="bold">16</p>
            <p class="bold">NOV</p>
          </div>
          <div
            class="inline paddingIcons paddingTopContent widthContentReservation"
          >
            <div class="concertImageReservation" />
            <div class="paddingIcons">
              <p class="bold">DISTURBED</p>
              <p class="descriptionFontSize">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sed enim eu leo dignissim elementum ut a urna.
              </p>
              <div class="inline iconFontSize iconPaddingReservation">
                <p>
                  <font-awesome-icon icon="fa-solid fa-calendar" />
                  16.11.2023.
                </p>
                <p>
                  <font-awesome-icon
                    icon="fa-solid fa-clock"
                    class="paddingIcons"
                  />21:45
                </p>
                <p>
                  <font-awesome-icon
                    icon="fa-solid fa-location-dot"
                    class="paddingIcons"
                  />Arena Zagreb
                </p>
                <p class="paddingIcons">Price: 100 EUR</p>
              </div>
            </div>
            <div class="buttonPositionReservation">
              <button class="blueButton">BUY</button>
            </div>
          </div>
        </div>        
        <div class="reservationContainer inline">
          <div class="paddingIcons paddingTopDateReservation">
            <p class="bold">16</p>
            <p class="bold">NOV</p>
          </div>
          <div
            class="inline paddingIcons paddingTopContent widthContentReservation"
          >
            <div class="concertImageReservation" />
            <div class="paddingIcons">
              <p class="bold">DISTURBED</p>
              <p class="descriptionFontSize">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sed enim eu leo dignissim elementum ut a urna.
              </p>
              <div class="inline iconFontSize iconPaddingReservation">
                <p>
                  <font-awesome-icon icon="fa-solid fa-calendar" />
                  16.11.2023.
                </p>
                <p>
                  <font-awesome-icon
                    icon="fa-solid fa-clock"
                    class="paddingIcons"
                  />21:45
                </p>
                <p>
                  <font-awesome-icon
                    icon="fa-solid fa-location-dot"
                    class="paddingIcons"
                  />Arena Zagreb
                </p>
                <p class="paddingIcons">Price: 100 EUR</p>
              </div>
            </div>
            <div class="buttonPositionReservation">
              <button class="blueButton">BUY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
</template>
