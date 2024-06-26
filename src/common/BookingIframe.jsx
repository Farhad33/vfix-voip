'use client'
import Styled from 'styled-components'
import { useState, useEffect } from'react'

export default function BookingIframe({ showBooking, setShowbooking }) {
    const [isLoaded, setIsLoaded] = useState(true)

    return (
        <>
            {showBooking && (
                <IframeContainer>
                    {isLoaded && <>
                        <Loading />
                    </>}
                    <Iframe 
                        onLoad={() => setIsLoaded(false)}
                        src='https://outlook.office365.com/owa/calendar/TalktoVFIXTechnician@VFIXmsp.com/bookings/'
                    ></Iframe>
                    <CloseButton onClick={() => setShowbooking(!showBooking)}>❌</CloseButton>
                </IframeContainer>
            )}
        </>
    )
}

const Iframe = Styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
    z-index: 11;
`
const IframeContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 11;
    svg {
        width: 80%;
        height: 80%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
const CloseButton = Styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  border: none;
  background: transparent;
  font-size: 20px;
  padding: 5px;
  cursor: pointer;
  z-index: 11;
`;

const Loading = (props) => (
  <svg
    className='animated'
    id='freepik_stories-update'
    viewBox='0 0 500 500'
    {...props}
  >
    <style>
      {
        "svg#freepik_stories-update:not(.animated) .animable {opacity: 0;}svg#freepik_stories-update.animated #freepik--background-simple--inject-39 {animation: 6s Infinite  linear shake;animation-delay: 0s;}svg#freepik_stories-update.animated #freepik--Clouds--inject-39 {animation: 1.5s Infinite  linear floating;animation-delay: 0s;}svg#freepik_stories-update.animated #freepik--Plant--inject-39 {animation: 3s Infinite  linear wind;animation-delay: 0s;}svg#freepik_stories-update.animated #freepik--Character--inject-39 {animation: 6s Infinite  linear floating;animation-delay: 0s;}            @keyframes shake {                10%, 90% {                    transform: translate3d(-1px, 0, 0);                  }                  20%, 80% {                    transform: translate3d(2px, 0, 0);                  }                  30%, 50%, 70% {                    transform: translate3d(-4px, 0, 0);                  }                  40%, 60% {                    transform: translate3d(4px, 0, 0);                  }            }                    @keyframes floating {                0% {                    opacity: 1;                    transform: translateY(0px);                }                50% {                    transform: translateY(-10px);                }                100% {                    opacity: 1;                    transform: translateY(0px);                }            }                    @keyframes wind {                0% {                    transform: rotate( 0deg );                }                25% {                    transform: rotate( 1deg );                }                75% {                    transform: rotate( -1deg );                }            }        .animator-hidden { display: none; }"
      }
    </style>
    <g
      id='freepik--background-simple--inject-39'
      style={{
        transformOrigin: "251.852806px 250.60899px",
      }}
      className='animable'
    >
      <g id='el8mojx8muox'>
        <path
          d='M67.93,167.09s-27.88,72,11.3,144.5S199.11,422.39,263.7,455.14s131.66,16.8,163.53-36.84-11.84-91.93-11.9-168.42,11.45-96.74-30-161.36-143.06-78.93-219.9-31S67.93,167.09,67.93,167.09Z'
          style={{
            fill: "rgb(255, 255, 255)",
            opacity: 0.7,
            transformOrigin: "248.588131px 250.60899px",
          }}
          className='animable'
          id='elyidxrm84isq'
        />
      </g>
      <path
        d='M112.6,91.45a97.3,97.3,0,0,1,13.23-7.7c33.32-15.94,74.22-10.69,106.25,7.72s56,48.5,73.43,81.06c8,14.88,15.09,30.86,27.9,41.86,16.5,14.18,38.79,17.39,58.46,25.11,71.52,28.09,72.34,131.06,9.65,169.51-24.71,15.16-55.23,19.73-83.62,21.85-39.34,2.93-79.39,1.43-117.38-9.19s-73.92-30.83-99.34-61C67.9,321.17,55.07,267.46,56.75,215.83,57.6,189.7,62,163.35,73,139.66,81.93,120.61,95.4,103.35,112.6,91.45Z'
        style={{
          fill: "#00D59C",
          transformOrigin: "251.852806px 253.226692px",
        }}
        id='elebl957vo9tv'
        className='animable'
      />
      <g id='elqbne4ayq6vp'>
        <path
          d='M112.6,91.45a97.3,97.3,0,0,1,13.23-7.7c33.32-15.94,74.22-10.69,106.25,7.72s56,48.5,73.43,81.06c8,14.88,15.09,30.86,27.9,41.86,16.5,14.18,38.79,17.39,58.46,25.11,71.52,28.09,72.34,131.06,9.65,169.51-24.71,15.16-55.23,19.73-83.62,21.85-39.34,2.93-79.39,1.43-117.38-9.19s-73.92-30.83-99.34-61C67.9,321.17,55.07,267.46,56.75,215.83,57.6,189.7,62,163.35,73,139.66,81.93,120.61,95.4,103.35,112.6,91.45Z'
          style={{
            fill: "rgb(255, 255, 255)",
            opacity: 0.7,
            transformOrigin: "251.852806px 253.226692px",
          }}
          className='animable'
          id='elmpkav775t8a'
        />
      </g>
    </g>
    <g
      id='freepik--Clouds--inject-39'
      style={{
        transformOrigin: "220.244972px 213.913513px",
      }}
      className='animable'
    >
      <path
        d='M135.36,134.92a20.14,20.14,0,0,0,.53-4.62,20.54,20.54,0,0,0-20.53-20.54,20.21,20.21,0,0,0-5.36.72,19.69,19.69,0,0,0-36.81,8.43,16.27,16.27,0,0,0-3-.29,16.09,16.09,0,0,0-16,14.29,9,9,0,0,0,.19,17.92H129.7a9,9,0,0,0,5.66-15.91Z'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "92.360966px 125.638514px",
        }}
        id='elv6hl85a66a'
        className='animable'
      />
      <line
        x1={80.6}
        y1={166.06}
        x2={80.6}
        y2={186.81}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "80.599998px 176.434998px",
        }}
        id='elj9n3akaez9'
        className='animable'
      />
      <line
        x1={80.6}
        y1={153.61}
        x2={80.6}
        y2={161.91}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "80.599998px 157.760002px",
        }}
        id='elgr2oy2rlsyb'
        className='animable'
      />
      <line
        x1={80.6}
        y1={145.86}
        x2={80.6}
        y2={150.3}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "80.599998px 148.080002px",
        }}
        id='el4je1cq97mkr'
        className='animable'
      />
      <polyline
        points='76.68 184.38 80.59 189.23 84.51 184.38'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "80.595001px 186.805px",
        }}
        id='eljwv04d2c97e'
        className='animable'
      />
      <line
        x1={93.97}
        y1={174.95}
        x2={93.97}
        y2={195.7}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "93.970001px 185.324997px",
        }}
        id='el3kj09fi5ula'
        className='animable'
      />
      <line
        x1={93.97}
        y1={162.5}
        x2={93.97}
        y2={170.8}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "93.970001px 166.650002px",
        }}
        id='elce14qazdbja'
        className='animable'
      />
      <line
        x1={93.97}
        y1={154.75}
        x2={93.97}
        y2={159.19}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "93.970001px 156.970001px",
        }}
        id='el50lea7t4co'
        className='animable'
      />
      <polyline
        points='90.05 193.27 93.97 198.12 97.89 193.27'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "93.970001px 195.695px",
        }}
        id='elwntbjvsavhp'
        className='animable'
      />
      <line
        x1={106.46}
        y1={157.51}
        x2={106.46}
        y2={178.26}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "106.459999px 167.884995px",
        }}
        id='el3ahnbg4eb66'
        className='animable'
      />
      <line
        x1={106.46}
        y1={145.06}
        x2={106.46}
        y2={153.36}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "106.459999px 149.209999px",
        }}
        id='elsx2vc1wz5ks'
        className='animable'
      />
      <line
        x1={106.46}
        y1={137.31}
        x2={106.46}
        y2={141.75}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "106.459999px 139.529999px",
        }}
        id='eld5mkbhhqc4j'
        className='animable'
      />
      <polyline
        points='102.54 175.83 106.46 180.68 110.38 175.83'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "106.459999px 178.254997px",
        }}
        id='el880yix6xt5f'
        className='animable'
      />
      <path
        d='M305.12,275.09a20.54,20.54,0,0,1,25.37-24.44,19.69,19.69,0,0,1,36.81,8.44,16.27,16.27,0,0,1,3-.29,16.09,16.09,0,0,1,16,14.28,9,9,0,0,1-.19,17.92H310.79a9,9,0,0,1-5.67-15.91Z'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "348.124092px 265.808985px",
        }}
        id='el5wnb369bms3'
        className='animable'
      />
      <line
        x1={356.69}
        y1={298.63}
        x2={356.69}
        y2={277.88}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "356.690002px 288.255005px",
        }}
        id='el44h0o8rah75'
        className='animable'
      />
      <line
        x1={356.69}
        y1={311.08}
        x2={356.69}
        y2={302.78}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "356.690002px 306.929993px",
        }}
        id='elxhqe5oqqyq'
        className='animable'
      />
      <line
        x1={356.69}
        y1={318.83}
        x2={356.69}
        y2={314.4}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "356.690002px 316.61499px",
        }}
        id='elwi4ocloaptd'
        className='animable'
      />
      <polyline
        points='360.61 280.31 356.69 275.46 352.77 280.31'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "356.689987px 277.884995px",
        }}
        id='elflewiptbwnk'
        className='animable'
      />
      <line
        x1={343.32}
        y1={289.74}
        x2={343.32}
        y2={269}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "343.320007px 279.369995px",
        }}
        id='elo07my7as0tk'
        className='animable'
      />
      <line
        x1={343.32}
        y1={302.19}
        x2={343.32}
        y2={293.89}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "343.320007px 298.040009px",
        }}
        id='ellx6wmzgqguo'
        className='animable'
      />
      <line
        x1={343.32}
        y1={309.95}
        x2={343.32}
        y2={305.51}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "343.320007px 307.730011px",
        }}
        id='elo6jsrjtb72'
        className='animable'
      />
      <polyline
        points='347.24 271.42 343.32 266.57 339.4 271.42'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "343.319992px 268.99501px",
        }}
        id='elk716cxr215'
        className='animable'
      />
      <line
        x1={330.82}
        y1={307.18}
        x2={330.82}
        y2={286.43}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "330.820007px 296.804993px",
        }}
        id='elaxeusokp01p'
        className='animable'
      />
      <line
        x1={330.82}
        y1={319.63}
        x2={330.82}
        y2={311.33}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "330.820007px 315.479996px",
        }}
        id='eld5jzggm2sca'
        className='animable'
      />
      <line
        x1={330.82}
        y1={327.38}
        x2={330.82}
        y2={322.94}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "330.820007px 325.160004px",
        }}
        id='elv2yk6o5dpy9'
        className='animable'
      />
      <polyline
        points='334.74 288.86 330.82 284.01 326.91 288.86'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "330.824997px 286.434998px",
        }}
        id='el65wuz2zij4b'
        className='animable'
      />
    </g>
    <g
      id='freepik--Floor--inject-39'
      style={{
        transformOrigin: "251.314987px 445.480011px",
      }}
      className='animable'
    >
      <line
        x1={34.33}
        y1={445.48}
        x2={468.3}
        y2={445.48}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeMiterlimit: 10,
          transformOrigin: "251.314987px 445.480011px",
        }}
        id='elghqyc4xivwn'
        className='animable'
      />
    </g>
    <g
      id='freepik--Plant--inject-39'
      style={{
        transformOrigin: "392.435013px 388.645004px",
      }}
      className='animable'
    >
      <path
        d='M362.79,384s17.24,1.36,18,14.07C380.75,398.07,363.29,406.11,362.79,384Z'
        style={{
          fill: "#00D59C",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "371.790009px 391.747687px",
        }}
        id='el7m2u99u86lu'
        className='animable'
      />
      <path
        d='M396.89,387.15s9.63-13,25.19-6.34C422.08,380.81,412.58,396.55,396.89,387.15Z'
        style={{
          fill: "#00D59C",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "409.485016px 384.527489px",
        }}
        id='elxwm82q7yhc'
        className='animable'
      />
      <path
        d='M420.76,346.05s2.77,25-20,18.15C400.73,364.2,408,345.78,420.76,346.05Z'
        style={{
          fill: "#00D59C",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "410.813003px 355.717693px",
        }}
        id='elys5zq2a20m'
        className='animable'
      />
      <path
        d='M392.77,332.1s18,9.73,4.77,24.48C397.54,356.58,384.89,346,392.77,332.1Z'
        style={{
          fill: "#00D59C",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "396.290206px 344.340012px",
        }}
        id='elkyzzvhst5y'
        className='animable'
      />
      <path
        d='M370.58,354.49s19.61-2,19.61,16.17C390.19,370.66,370.58,371.43,370.58,354.49Z'
        style={{
          fill: "#00D59C",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "380.384995px 362.545129px",
        }}
        id='ellojcup4jkwj'
        className='animable'
      />
      <path
        d='M389.07,424s-8.94-18.76-.36-37.86,11.48-35.2,7-46.54'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "391.393873px 381.800003px",
        }}
        id='el5w4je65fxdd'
        className='animable'
      />
      <path
        d='M377,359.36s11.75,4.67,15.75,16.78'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "384.875px 367.749985px",
        }}
        id='el5mwhc49qmlh'
        className='animable'
      />
      <path
        d='M414.56,356.07s-6.79,9.25-18.29,8.25'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "405.414993px 360.232811px",
        }}
        id='el46gtuyptj9'
        className='animable'
      />
      <path
        d='M414.56,383.47s-18.81,5.42-26.28,3.65'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "401.419998px 385.472617px",
        }}
        id='el0hyyu7oudzu6'
        className='animable'
      />
      <path
        d='M368.41,389.72s8.41,9.23,16.86,9.09'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "376.840012px 394.265788px",
        }}
        id='elann25sa766l'
        className='animable'
      />
      <polygon
        points='367.46 409.12 406.93 409.12 402.8 445.19 371.6 445.19 367.46 409.12'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "387.194992px 427.154999px",
        }}
        id='elnq4aogpsfwb'
        className='animable'
      />
      <rect
        x={365.77}
        y={408.32}
        width={42.86}
        height={5.09}
        rx={0.99}
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "387.2px 410.865px",
        }}
        id='elpvzk7lucyh9'
        className='animable'
      />
      <line
        x1={370.58}
        y1={413.41}
        x2={394.35}
        y2={413.41}
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "382.464996px 413.410004px",
        }}
        id='el0926g6jg1fqw'
        className='animable'
      />
      <line
        x1={398.84}
        y1={413.41}
        x2={402.41}
        y2={413.41}
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "400.625px 413.410004px",
        }}
        id='elsrt955c17o'
        className='animable'
      />
    </g>
    <g
      id='freepik--Interface--inject-39'
      style={{
        transformOrigin: "312.350021px 179.870003px",
      }}
      className='animable animator-hidden'
    >
      <path
        d='M460.43,106.79v146a6.7,6.7,0,0,1-6.7,6.7H171a6.71,6.71,0,0,1-6.71-6.7v-146a6.71,6.71,0,0,1,6.71-6.7H453.73A6.7,6.7,0,0,1,460.43,106.79Z'
        style={{
          fill: "rgb(255, 255, 255)",
          transformOrigin: "312.360001px 179.790024px",
        }}
        id='elrfzpeggic0k'
        className='animable'
      />
      <g
        style={{
          clipPath: "url(&quot",
          transformOrigin: "368.134995px 187.02002px",
        }}
        id='ela4sppx6qzn'
        className='animable'
      >
        <g id='elwmx63b811k'>
          <path
            d='M460.43,114.55V252.82a6.7,6.7,0,0,1-6.7,6.7H275.84v-145Z'
            style={{
              fill: "#00D59C",
              opacity: 0.2,
              transformOrigin: "368.134995px 187.02002px",
            }}
            className='animable'
            id='el6d1yyee406w'
          />
        </g>
      </g>
      <path
        d='M460.43,106.79v146a6.7,6.7,0,0,1-6.7,6.7H171a6.71,6.71,0,0,1-6.71-6.7v-146a6.71,6.71,0,0,1,6.71-6.7H453.73A6.7,6.7,0,0,1,460.43,106.79Z'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "312.360001px 179.790024px",
        }}
        id='elchid6m51gpq'
        className='animable'
      />
      <path
        d='M435.66,173.63H398.87a7.43,7.43,0,0,0-7.43,7.43h0a7.43,7.43,0,0,0,7.43,7.42h36.79a7.42,7.42,0,0,0,7.43-7.42h0A7.42,7.42,0,0,0,435.66,173.63Z'
        style={{
          fill: "#00D59C",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "417.265003px 181.054999px",
        }}
        id='ellwzje3egrak'
        className='animable'
      />
      <path
        d='M460.43,106.79v13.68H164.27V106.79a6.71,6.71,0,0,1,6.71-6.7H453.73A6.7,6.7,0,0,1,460.43,106.79Z'
        style={{
          fill: "rgb(153, 153, 153)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "312.350021px 110.280003px",
        }}
        id='el148bv9uzdst'
        className='animable'
      />
      <circle
        cx={176.8}
        cy={109.93}
        r={4.62}
        style={{
          fill: "#00D59C",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "176.8px 109.93px",
        }}
        id='elw7zxkd8q2ur'
        className='animable'
      />
      <circle
        cx={189.3}
        cy={109.93}
        r={4.62}
        style={{
          fill: "rgb(117, 117, 117)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "189.3px 109.93px",
        }}
        id='elghkcc133x1f'
        className='animable'
      />
      <circle
        cx={201.8}
        cy={109.93}
        r={4.62}
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "201.8px 109.93px",
        }}
        id='eln2jtxdybrd'
        className='animable'
      />
      <line
        x1={275.84}
        y1={120.47}
        x2={275.84}
        y2={259.65}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "275.839996px 190.059998px",
        }}
        id='el85y0k803zkp'
        className='animable'
      />
      <path
        d='M450.35,114.55H385.6a4.62,4.62,0,0,1-4.61-4.62h0a4.62,4.62,0,0,1,4.61-4.61h64.75a4.62,4.62,0,0,1,4.62,4.61h0A4.62,4.62,0,0,1,450.35,114.55Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "417.979996px 109.935001px",
        }}
        id='elenyyjb21c54'
        className='animable'
      />
      <path
        d='M438.54,163.34H298.42a4.55,4.55,0,0,1-4.55-4.55h0a4.55,4.55,0,0,1,4.55-4.55H438.54a4.55,4.55,0,0,1,4.55,4.55h0A4.55,4.55,0,0,1,438.54,163.34Z'
        style={{
          fill: "rgb(191, 191, 191)",
          stroke: "rgb(38, 50, 56)",
          strokeMiterlimit: 10,
          transformOrigin: "368.480011px 158.789986px",
        }}
        id='elj8u7lmhlxus'
        className='animable'
      />
      <path
        d='M373.54,163.34H298.42a4.55,4.55,0,0,1-4.55-4.55h0a4.55,4.55,0,0,1,4.55-4.55h75.12a4.55,4.55,0,0,1,4.55,4.55h0A4.55,4.55,0,0,1,373.54,163.34Z'
        style={{
          fill: "#00D59C",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "335.980011px 158.789986px",
        }}
        id='elzz6ybwq1v7i'
        className='animable'
      />
      <rect
        x={298.01}
        y={227.96}
        width={6.17}
        height={6.17}
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "301.095px 231.045px",
        }}
        id='el69jtipg8brg'
        className='animable'
      />
      <polyline
        points='299.89 230.62 300.8 231.86 302.31 229.71'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "301.100006px 230.785004px",
        }}
        id='elpi6ej3utj7k'
        className='animable'
      />
      <g id='elu4k6553mivs'>
        <rect
          x={313.87}
          y={229.25}
          width={45.62}
          height={3.59}
          rx={1.8}
          style={{
            opacity: 0.3,
            transformOrigin: "336.68px 231.045px",
          }}
          className='animable'
          id='elxmgpu76gw9i'
        />
      </g>
      <path
        d='M206.82,234.73h0l1-6.85h1.21l-1.3,8.39h-2l-1.3-8.39h1.33Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "206.730011px 232.074989px",
        }}
        id='ela7oi860xl9a'
        className='animable'
      />
      <path
        d='M211,231.42h1.81v1.2H211v2.46h2.28v1.19h-3.6v-8.39h3.6v1.2H211Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "211.479996px 232.075005px",
        }}
        id='elpc3xib4n04'
        className='animable'
      />
      <path
        d='M216.84,236.27a2.57,2.57,0,0,1-.12-1v-1.32c0-.77-.27-1.06-.87-1.06h-.45v3.41h-1.32v-8.39h2c1.37,0,2,.64,2,1.93v.66a1.65,1.65,0,0,1-.87,1.69v0c.66.27.88.89.88,1.77v1.3a2.48,2.48,0,0,0,.14,1Zm-1.44-7.19v2.58h.51c.5,0,.8-.22.8-.89v-.83c0-.6-.21-.86-.68-.86Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "216.155006px 232.105003px",
        }}
        id='elp64zr38k19l'
        className='animable'
      />
      <path
        d='M220.18,235v1.27H218.9V235Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "219.539993px 235.635002px",
        }}
        id='elencv4xyiivc'
        className='animable'
      />
      <path
        d='M224.93,229c-.42,0-.69.23-.69.83v.9H223v-.82c0-1.34.67-2.11,2-2.11s2,.77,2,2.11a4.63,4.63,0,0,1-1.63,3.33c-.78.84-1,1.23-1,1.68a1.09,1.09,0,0,0,0,.18h2.5v1.19H223v-1a3.63,3.63,0,0,1,1.31-2.67,3.54,3.54,0,0,0,1.3-2.63C225.61,229.19,225.35,229,224.93,229Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "225px 232.044983px",
        }}
        id='elwfqop3mxz6'
        className='animable'
      />
      <path
        d='M229,235v1.27h-1.27V235Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "228.364998px 235.635002px",
        }}
        id='eln4u9o01k4m'
        className='animable'
      />
      <path
        d='M229.87,229.89a2,2,0,1,1,4,0v4.37a2,2,0,1,1-4,0Zm1.32,4.45c0,.6.27.83.68.83s.69-.23.69-.83v-4.53c0-.6-.27-.83-.69-.83s-.68.23-.68.83Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "231.869995px 232.074997px",
        }}
        id='elvc860bu1mgk'
        className='animable'
      />
      <path
        d='M235.92,233.56v.78c0,.6.26.82.68.82s.69-.22.69-.82V232.5c0-.6-.27-.83-.69-.83s-.68.23-.68.83v.25h-1.25l.24-4.87h3.48v1.2h-2.3l-.11,2h0a1.25,1.25,0,0,1,1.14-.61c1,0,1.47.68,1.47,1.92v1.87a1.84,1.84,0,0,1-2,2.11c-1.3,0-2-.77-2-2.11v-.7Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "236.600639px 232.129478px",
        }}
        id='eldqbkr896o06'
        className='animable'
      />
      <path
        d='M200,202.8a31.52,31.52,0,0,1-7.31-10.56'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "196.345001px 197.520004px",
        }}
        id='elfs3bp8bdk8w'
        className='animable'
      />
      <path
        d='M228.81,149.36A31.51,31.51,0,0,1,251,168.63'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "239.904999px 158.995003px",
        }}
        id='el38qkmrgn7m5'
        className='animable'
      />
      <path
        d='M231.47,172v-9l-6.72-.58a18.2,18.2,0,0,0-1.66-4l4.34-5.15L221.09,147l-5.15,4.33a18.91,18.91,0,0,0-4-1.66l-.58-6.71h-9l-.58,6.71a18.49,18.49,0,0,0-4,1.66L192.62,147l-6.33,6.34,4.33,5.15a18.7,18.7,0,0,0-1.66,4l-6.71.58v9l6.71.58a18.7,18.7,0,0,0,1.66,4l-4.33,5.15,6.33,6.34,5.16-4.33a18.49,18.49,0,0,0,4,1.66l.58,6.71h9l.58-6.71a18.91,18.91,0,0,0,4-1.66l5.15,4.33,6.34-6.34-4.34-5.15a18.2,18.2,0,0,0,1.66-4ZM206.86,178a10.41,10.41,0,1,1,10.41-10.41A10.42,10.42,0,0,1,206.86,178Z'
        style={{
          fill: "#00D59C",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "206.859993px 167.569992px",
        }}
        id='el6sanjsb55wq'
        className='animable'
      />
      <path
        d='M261.12,192v-6.37l-4.78-.41a13.64,13.64,0,0,0-1.18-2.87l3.08-3.66-4.51-4.51-3.66,3.08a13.64,13.64,0,0,0-2.87-1.18l-.41-4.77h-6.37L240,176.1a13.78,13.78,0,0,0-2.86,1.18l-3.66-3.08L229,178.71l3.08,3.66a13.64,13.64,0,0,0-1.18,2.87l-4.78.41V192l4.78.42a13.78,13.78,0,0,0,1.18,2.86L229,199l4.51,4.51,3.66-3.08a13.26,13.26,0,0,0,2.86,1.18l.42,4.78h6.37l.41-4.78a13.13,13.13,0,0,0,2.87-1.18l3.66,3.08,4.51-4.51-3.08-3.66a13.78,13.78,0,0,0,1.18-2.86Zm-17.52,4.23a7.41,7.41,0,1,1,7.41-7.41A7.41,7.41,0,0,1,243.6,196.25Z'
        style={{
          fill: "#00D59C",
          transformOrigin: "243.620003px 188.849998px",
        }}
        id='elrchswy4m24e'
        className='animable'
      />
      <g
        style={{
          clipPath: "url(&quot",
          transformOrigin: "243.620003px 188.849998px",
        }}
        id='elj8xu6jc3k6'
        className='animable'
      >
        <g id='el0jidk2r28czo'>
          <path
            d='M261.12,192v-6.37l-4.78-.41a13.64,13.64,0,0,0-1.18-2.87l3.08-3.66-4.51-4.51-3.66,3.08a13.64,13.64,0,0,0-2.87-1.18l-.41-4.77h-6.37L240,176.1a13.78,13.78,0,0,0-2.86,1.18l-3.66-3.08L229,178.71l3.08,3.66a13.64,13.64,0,0,0-1.18,2.87l-4.78.41V192l4.78.42a13.78,13.78,0,0,0,1.18,2.86L229,199l4.51,4.51,3.66-3.08a13.26,13.26,0,0,0,2.86,1.18l.42,4.78h6.37l.41-4.78a13.13,13.13,0,0,0,2.87-1.18l3.66,3.08,4.51-4.51-3.08-3.66a13.78,13.78,0,0,0,1.18-2.86Zm-17.52,4.23a7.41,7.41,0,1,1,7.41-7.41A7.41,7.41,0,0,1,243.6,196.25Z'
            style={{
              fill: "rgb(255, 255, 255)",
              opacity: 0.3,
              transformOrigin: "243.620003px 188.849998px",
            }}
            className='animable'
            id='el0dyl1n7bl5oe'
          />
        </g>
      </g>
      <path
        d='M261.12,192v-6.37l-4.78-.41a13.64,13.64,0,0,0-1.18-2.87l3.08-3.66-4.51-4.51-3.66,3.08a13.64,13.64,0,0,0-2.87-1.18l-.41-4.77h-6.37L240,176.1a13.78,13.78,0,0,0-2.86,1.18l-3.66-3.08L229,178.71l3.08,3.66a13.64,13.64,0,0,0-1.18,2.87l-4.78.41V192l4.78.42a13.78,13.78,0,0,0,1.18,2.86L229,199l4.51,4.51,3.66-3.08a13.26,13.26,0,0,0,2.86,1.18l.42,4.78h6.37l.41-4.78a13.13,13.13,0,0,0,2.87-1.18l3.66,3.08,4.51-4.51-3.08-3.66a13.78,13.78,0,0,0,1.18-2.86Zm-17.52,4.23a7.41,7.41,0,1,1,7.41-7.41A7.41,7.41,0,0,1,243.6,196.25Z'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "243.620003px 188.849998px",
        }}
        id='elonrv8q7r0v'
        className='animable'
      />
      <path
        d='M229.92,206.88v-4.54l-3.4-.29a9.13,9.13,0,0,0-.84-2l2.2-2.61-3.21-3.21-2.61,2.2a9.13,9.13,0,0,0-2-.84l-.29-3.4h-4.54l-.29,3.4a9.13,9.13,0,0,0-2,.84l-2.6-2.2-3.21,3.21,2.19,2.61a9.13,9.13,0,0,0-.84,2l-3.4.29v4.54l3.4.29a9.13,9.13,0,0,0,.84,2l-2.19,2.6,3.21,3.21,2.6-2.19a9.13,9.13,0,0,0,2,.84l.29,3.4h4.54l.29-3.4a9.13,9.13,0,0,0,2-.84l2.61,2.19,3.21-3.21-2.2-2.6a9.13,9.13,0,0,0,.84-2Zm-12.46,3a5.27,5.27,0,1,1,5.27-5.27A5.27,5.27,0,0,1,217.46,209.88Z'
        style={{
          fill: "#00D59C",
          transformOrigin: "217.500008px 204.610008px",
        }}
        id='elod7cf1dx'
        className='animable'
      />
      <g
        style={{
          clipPath: "url(&quot",
          transformOrigin: "217.500008px 204.610008px",
        }}
        id='eleb1c1x7fg69'
        className='animable'
      >
        <g id='el1lklqdf40cf'>
          <path
            d='M229.92,206.88v-4.54l-3.4-.29a9.13,9.13,0,0,0-.84-2l2.2-2.61-3.21-3.21-2.61,2.2a9.13,9.13,0,0,0-2-.84l-.29-3.4h-4.54l-.29,3.4a9.13,9.13,0,0,0-2,.84l-2.6-2.2-3.21,3.21,2.19,2.61a9.13,9.13,0,0,0-.84,2l-3.4.29v4.54l3.4.29a9.13,9.13,0,0,0,.84,2l-2.19,2.6,3.21,3.21,2.6-2.19a9.13,9.13,0,0,0,2,.84l.29,3.4h4.54l.29-3.4a9.13,9.13,0,0,0,2-.84l2.61,2.19,3.21-3.21-2.2-2.6a9.13,9.13,0,0,0,.84-2Zm-12.46,3a5.27,5.27,0,1,1,5.27-5.27A5.27,5.27,0,0,1,217.46,209.88Z'
            style={{
              fill: "rgb(255, 255, 255)",
              opacity: 0.5,
              transformOrigin: "217.500008px 204.610008px",
            }}
            className='animable'
            id='el821r6qjfyy3'
          />
        </g>
      </g>
      <path
        d='M229.92,206.88v-4.54l-3.4-.29a9.13,9.13,0,0,0-.84-2l2.2-2.61-3.21-3.21-2.61,2.2a9.13,9.13,0,0,0-2-.84l-.29-3.4h-4.54l-.29,3.4a9.13,9.13,0,0,0-2,.84l-2.6-2.2-3.21,3.21,2.19,2.61a9.13,9.13,0,0,0-.84,2l-3.4.29v4.54l3.4.29a9.13,9.13,0,0,0,.84,2l-2.19,2.6,3.21,3.21,2.6-2.19a9.13,9.13,0,0,0,2,.84l.29,3.4h4.54l.29-3.4a9.13,9.13,0,0,0,2-.84l2.61,2.19,3.21-3.21-2.2-2.6a9.13,9.13,0,0,0,.84-2Zm-12.46,3a5.27,5.27,0,1,1,5.27-5.27A5.27,5.27,0,0,1,217.46,209.88Z'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "217.500008px 204.610008px",
        }}
        id='elalsvumeazo'
        className='animable'
      />
      <polyline
        points='248.61 167.54 251.02 168.63 251.97 166.46'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "250.290001px 167.545006px",
        }}
        id='elhjtlig7sp'
        className='animable'
      />
      <polyline
        points='195.06 193.24 192.64 192.15 191.69 194.33'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "193.375px 193.239998px",
        }}
        id='ele3xt0kuzhkm'
        className='animable'
      />
      <path
        d='M295.19,143v4.91c0,.46.2.62.52.62s.52-.16.52-.62V143h.95v4.85a1.4,1.4,0,0,1-1.5,1.6c-1,0-1.49-.58-1.49-1.6V143Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "295.692551px 146.227379px",
        }}
        id='elavcvj7jzucv'
        className='animable'
      />
      <path
        d='M300.82,144.56v.83c0,1-.49,1.58-1.49,1.58h-.47v2.39h-1V143h1.47C300.33,143,300.82,143.55,300.82,144.56Zm-2-.66v2.16h.47c.32,0,.49-.15.49-.6v-1c0-.45-.17-.6-.49-.6Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "299.340012px 146.18px",
        }}
        id='eln8fgkzwlap'
        className='animable'
      />
      <path
        d='M304.4,149.36h-1l-.17-1.16H302l-.17,1.16h-.92l1-6.37h1.46Zm-2.28-2h1l-.47-3.22h0Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "302.654984px 146.175003px",
        }}
        id='el99lwfioop2'
        className='animable'
      />
      <path
        d='M304.86,143h1.59c1,0,1.49.56,1.49,1.57v3.22c0,1-.49,1.58-1.49,1.58h-1.59Zm1,.91v4.55h.57c.32,0,.51-.17.51-.62v-3.31c0-.46-.19-.62-.51-.62Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "306.399979px 146.185005px",
        }}
        id='eld5oqphlrgsc'
        className='animable'
      />
      <path
        d='M311.8,149.36h-1l-.17-1.16h-1.23l-.17,1.16h-.92l1-6.37h1.46Zm-2.28-2h1l-.47-3.22h0Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "310.054962px 146.175003px",
        }}
        id='el90r63rw29lf'
        className='animable'
      />
      <path
        d='M311.63,143h3.09v.91h-1.05v5.46h-1V143.9h-1Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "313.175003px 146.185005px",
        }}
        id='eln9q4byqss78'
        className='animable'
      />
      <path
        d='M315.15,143h1v6.37h-1Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "315.649994px 146.184998px",
        }}
        id='elelp0m609uqm'
        className='animable'
      />
      <path
        d='M317.79,144.75h0v4.61h-.9V143h1.26l1,3.81h0V143H320v6.37h-1Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "318.445007px 146.184998px",
        }}
        id='elqg8h19us48'
        className='animable'
      />
      <path
        d='M322.26,145.81h1.4v2c0,1-.51,1.6-1.49,1.6s-1.49-.58-1.49-1.6v-3.31c0-1,.51-1.6,1.49-1.6s1.49.58,1.49,1.6v.62h-1v-.68c0-.46-.2-.63-.51-.63s-.52.17-.52.63v3.43c0,.46.2.62.52.62s.51-.16.51-.62v-1.17h-.45Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "322.170013px 146.154999px",
        }}
        id='elec39ohdru0h'
        className='animable'
      />
      <polygon
        points='452.09 192.57 435.47 180.72 440.2 200.57 443.61 195.51 446.75 200.18 449.26 198.49 446.12 193.82 452.09 192.57'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "443.779999px 190.645004px",
        }}
        id='elag447v42nfh'
        className='animable'
      />
    </g>
    <g
      id='freepik--Character--inject-39'
      style={{
        transformOrigin: "181.358814px 332.102997px",
      }}
      className='animable'
    >
      <path
        d='M254,281.64c2.05-2.89,15.55,5.15,13.89,10.86s-7.06,5.09-10.22,2.06S251.81,284.73,254,281.64Z'
        style={{
          fill: "#00D59C",
          transformOrigin: "260.618065px 288.930939px",
        }}
        id='elasw1jvf2rd'
        className='animable'
      />
      <g
        style={{
          clipPath: "url(&quot",
          transformOrigin: "260.618065px 288.930939px",
        }}
        id='el5f4dbrhc3m9'
        className='animable'
      >
        <g id='elcpv0inisnxp'>
          <path
            d='M254,281.64c2.05-2.89,15.55,5.15,13.89,10.86s-7.06,5.09-10.22,2.06S251.81,284.73,254,281.64Z'
            style={{
              fillOpacity: 0.7,
              opacity: 0.3,
              transformOrigin: "260.618065px 288.930939px",
            }}
            className='animable'
            id='elni8w70jo6c'
          />
        </g>
      </g>
      <path
        d='M254,281.64c2.05-2.89,15.55,5.15,13.89,10.86s-7.06,5.09-10.22,2.06S251.81,284.73,254,281.64Z'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "260.618058px 288.930917px",
        }}
        id='eljkspg37dved'
        className='animable'
      />
      <path
        d='M260.41,259.47s2,0,5.32,7.71a18.32,18.32,0,0,1,1,10.64l-4.87,23.47L250,294.16l6.89-17.22S253.28,265.81,260.41,259.47Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "258.551751px 280.380005px",
        }}
        id='elacntypomkj'
        className='animable'
      />
      <path
        d='M255.61,274.57l-7.6,2.52c-.81.21-2.4-1.13-2.33-2l2.26-26.58a2.54,2.54,0,0,1,1.89-2.24l8.43-1.83c.8-.21,2.83.75,2.76,1.58l-3.51,26.27A2.55,2.55,0,0,1,255.61,274.57Z'
        style={{
          fill: "#00D59C",
          transformOrigin: "253.349754px 260.761353px",
        }}
        id='elv5r7t92jnw'
        className='animable'
      />
      <g
        style={{
          clipPath: "url(&quot",
          transformOrigin: "253.349754px 260.761353px",
        }}
        id='el9104reltrsh'
        className='animable'
      >
        <g id='elw4sdng3fxe'>
          <path
            d='M255.61,274.57l-7.6,2.52c-.81.21-2.4-1.13-2.33-2l2.26-26.58a2.54,2.54,0,0,1,1.89-2.24l8.43-1.83c.8-.21,2.83.75,2.76,1.58l-3.51,26.27A2.55,2.55,0,0,1,255.61,274.57Z'
            style={{
              fillOpacity: 0.7,
              opacity: 0.3,
              transformOrigin: "253.349754px 260.761353px",
            }}
            className='animable'
            id='el2g98kxspr2a'
          />
        </g>
      </g>
      <path
        d='M255.61,274.57l-7.6,2.52c-.81.21-2.4-1.13-2.33-2l2.26-26.58a2.54,2.54,0,0,1,1.89-2.24l8.43-1.83c.8-.21,2.83.75,2.76,1.58l-3.51,26.27A2.55,2.55,0,0,1,255.61,274.57Z'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "253.349749px 260.76136px",
        }}
        id='ela96iie67ryi'
        className='animable'
      />
      <path
        d='M256.86,275.23l-8.42,1.83a1.21,1.21,0,0,1-1.5-1.27l2.25-26.59a2.54,2.54,0,0,1,1.9-2.24l8.42-1.83a1.21,1.21,0,0,1,1.5,1.27L258.76,273A2.54,2.54,0,0,1,256.86,275.23Z'
        style={{
          fill: "#00D59C",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "253.97499px 261.095005px",
        }}
        id='elvwtqgvn6nvd'
        className='animable'
      />
      <g id='elxuhsu9vrmk'>
        <path
          d='M252.19,254.12l-1.36.3a.2.2,0,0,1-.24-.21l.37-4.28a.41.41,0,0,1,.3-.37l1.36-.29a.19.19,0,0,1,.24.2l-.36,4.29A.42.42,0,0,1,252.19,254.12Z'
          style={{
            fillOpacity: 0.7,
            opacity: 0.3,
            transformOrigin: "251.725128px 251.843643px",
          }}
          className='animable'
          id='elgx1lbsw2ha9'
        />
      </g>
      <path
        d='M264,267.45c.33-3.73-3.06-9.32-5.32-9.32s-9.13,5.29-9.13,5.29c-2.65,1.93-1.34,3.76-1.34,3.76-1.56,1-2,2.43-1.28,3.08s3,0,3,0-2.28,1.67-1.71,2.48c1.34,1.94,5.76-.61,5.76-.61s-2.56,1.69-2.42,2c1,2.11,5.16-.35,5.16-.35l2.94,1.51a2.51,2.51,0,0,0,2.68,2.52'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "255.308003px 267.972904px",
        }}
        id='eljgkezsnkph'
        className='animable'
      />
      <path
        d='M248.25,267.18s6.43-4.16,7.25-4.27,3.79-.76,3.79-.76'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "253.770004px 264.664993px",
        }}
        id='el71ckg761qmn'
        className='animable'
      />
      <path
        d='M250,270.26s5.23-2.7,6.19-2.7a35.82,35.82,0,0,0,4.26-.73'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "255.225006px 268.544998px",
        }}
        id='elyjpzkccspq'
        className='animable'
      />
      <path
        d='M254,272.13a12.64,12.64,0,0,1,1.93-1.14,25.76,25.76,0,0,1,3.75,0'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "256.839996px 271.525829px",
        }}
        id='elpw903eewhqh'
        className='animable'
      />
      <path
        d='M202.55,272c10,.15,33,36,33,36L250,290l4-8.34s2,15,13.89,10.86c0,0-10.47,39.38-22.22,44.13S201.34,308,201.34,308Z'
        style={{
          fill: "#00D59C",
          transformOrigin: "234.615005px 304.556259px",
        }}
        id='elnokiesanmpl'
        className='animable'
      />
      <g
        style={{
          clipPath: "url(&quot",
          transformOrigin: "219.529991px 314.069992px",
        }}
        id='elzr0uujm2eao'
        className='animable'
      >
        <g id='elelpc2cbxd2p'>
          <path
            d='M203.37,310c4.13,4.05,13.91,13.31,23.44,19.88-2.8-9.37-10.47-19.35-10.47-19.35-2.38-.79-5.74-7.92-5.74-7.92-1.58.6-3.82-4.35-3.82-4.35C204.94,299.82,203.91,304.43,203.37,310Z'
            style={{
              fillOpacity: 0.7,
              opacity: 0.2,
              transformOrigin: "215.089996px 314.069992px",
            }}
            className='animable'
            id='elnic4ck20i5'
          />
        </g>
        <g id='elkluq19n3izs'>
          <path
            d='M234.86,317.15a22.72,22.72,0,0,1,.83-9.4l-.17.22s-1.56-2.43-4-6C230.83,306.61,230.5,314.39,234.86,317.15Z'
            style={{
              fillOpacity: 0.7,
              opacity: 0.2,
              transformOrigin: "233.399971px 309.559998px",
            }}
            className='animable'
            id='elf0h6hqtljok'
          />
        </g>
      </g>
      <path
        d='M202.55,272c10,.15,33,36,33,36L250,290l4-8.34s2,15,13.89,10.86c0,0-10.47,39.38-22.22,44.13S201.34,308,201.34,308Z'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "234.615005px 304.556267px",
        }}
        id='eliq1tvgdkbu8'
        className='animable'
      />
      <path
        d='M98.91,426.25S92.58,439,92.58,442s-1.06,4.35-6.6,4.35-19.25.12-21.36-.86H51.8c-3,0-4.22-2.88-2.38-2.49s15.45-3.37,19.15-4.89,9.78-3.32,13.06-6.49,7.25-15,7.25-15Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "73.730824px 431.487338px",
        }}
        id='el6j82wtkf70a'
        className='animable'
      />
      <path
        d='M64.62,445.48c0-3.72,4-1.94,10-3.49,3.87-1,4.28-2.35,4.28-2.35'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "71.760002px 442.560013px",
        }}
        id='el0akjrskxmobo'
        className='animable'
      />
      <path
        d='M206.62,295c.4,7.28.57,14.84.86,20.48.72,13.63,9.84,53.47,9.84,53.47s10,6,10.5,17-60.61,42-77,33.16-14.19-34.52-14.19-34.52-24.26-98-14.33-105.88,13.28-6.9,38.7-10.42S202.55,272,202.55,272a10.44,10.44,0,0,1,2.91,5.13'
        style={{
          fill: "#00D59C",
          transformOrigin: "173.86792px 343.999496px",
        }}
        id='elfk4bt9wvo3j'
        className='animable'
      />
      <g
        style={{
          clipPath: "url(&quot",
          transformOrigin: "175.566776px 362.04776px",
        }}
        id='el0w9hn1j8e59'
        className='animable'
      >
        <g id='elayq7zxtzsoo'>
          <path
            d='M136.62,384.53s-2.21,25.68,14.19,34.52,77.54-22.17,77-33.16-10.49-17-10.49-17-.9-3.95-2.17-9.78c-8.67,5.62-28.43,17.28-41.29,16,0,0,21.41,7.59,35.1,1.07s-5.69,8.58-9.64,8.34-33.43-5.57-38.77-2.8-17.21,23.14-17.21,23.14-7.2-16.18-5.6-26.11c0,0,.21-30.92-3.23-49,0,0,8.23-14.2-.87-25.23-3.36-4.07-7,4.31-10.32,16.5C128.22,350.58,136.62,384.53,136.62,384.53Z'
            style={{
              fillOpacity: 0.7,
              opacity: 0.2,
              transformOrigin: "175.566776px 362.04776px",
            }}
            className='animable'
            id='elogx699dioij'
          />
        </g>
      </g>
      <path
        d='M206.62,295c.4,7.28.57,14.84.86,20.48.72,13.63,9.84,53.47,9.84,53.47s10,6,10.5,17-60.61,42-77,33.16-14.19-34.52-14.19-34.52-24.26-98-14.33-105.88,13.28-6.9,38.7-10.42S202.55,272,202.55,272a10.44,10.44,0,0,1,2.91,5.13'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "173.86792px 343.999466px",
        }}
        id='el5p9drikyelt'
        className='animable'
      />
      <path
        d='M218.91,378.3c1.54-.2,5.71,2.44,5.71,2.44s67.44-17.32,77.58-11.82c20.35,11,9.5,32.77,5.28,39S241,443.64,219.39,444.2s-61.25-5.41-69-18.14.18-26.85,11-37.21c11-10.55,32.58-1.32,40-3.43C210.87,382.7,214.2,378.89,218.91,378.3Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "230.726555px 406.038605px",
        }}
        id='elo0lc0cbh3a'
        className='animable'
      />
      <path
        d='M162.5,437.55l-1,4.35s2.65,7.53,14.32,8.75,18.57,3.82,24.17,4.15a47.6,47.6,0,0,0,8.87-.14L210,453Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "185.75px 446.246477px",
        }}
        id='elurtfefh0ic'
        className='animable'
      />
      <path
        d='M230.21,437.09,210,453a231.08,231.08,0,0,1-29-4.33h0c-9.57-2.22-17.93-5.4-18.39-9.75-.7-6.63,6.37-8.44,14.79-8.18,1.57,0,3.18.15,4.81.32,13.47,1.45,30.58-6,30.58-6Z'
        style={{
          fill: "#00D59C",
          transformOrigin: "196.386063px 439.030014px",
        }}
        id='el3x33qpz2g3j'
        className='animable'
      />
      <g
        style={{
          clipPath: "url(&quot",
          transformOrigin: "196.408257px 436.724335px",
        }}
        id='elyqapf8lyibm'
        className='animable'
      >
        <g id='eljhvcby78dv'>
          <path
            d='M162.63,438.71a62.12,62.12,0,0,1,11.24,5.53s18.77,9.66,47.61-.29l8.74-6.86L212.82,425s-17.11,7.44-30.58,6c-1.63-.17-3.24-.29-4.81-.32C169.08,430.42,162.05,432.2,162.63,438.71Z'
            style={{
              fillOpacity: 0.7,
              opacity: 0.2,
              transformOrigin: "196.408257px 436.724335px",
            }}
            className='animable'
            id='elbrjmxdoa7vj'
          />
        </g>
      </g>
      <path
        d='M230.21,437.09,210,453a231.08,231.08,0,0,1-29-4.33h0c-9.57-2.22-17.93-5.4-18.39-9.75-.7-6.63,6.37-8.44,14.79-8.18,1.57,0,3.18.15,4.81.32,13.47,1.45,30.58-6,30.58-6Z'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "196.386055px 439.030014px",
        }}
        id='elorut7hhaws'
        className='animable'
      />
      <path
        d='M211.38,443.34c3.64.59-.36,8.05-5.3,5.78S207.73,442.75,211.38,443.34Z'
        style={{
          fill: "rgb(255, 255, 255)",
          transformOrigin: "208.549797px 446.415558px",
        }}
        id='el7m30tpdtzaj'
        className='animable'
      />
      <g
        style={{
          clipPath: "url(&quot",
          transformOrigin: "208.551537px 445.600891px",
        }}
        id='elwncpu71of9b'
        className='animable'
      >
        <g id='elvh4gxbrzqh'>
          <path
            d='M204.54,447.92a77.73,77.73,0,0,0,7.85-1.37c.7-1.46.54-3-1-3.21C208.32,442.84,203.18,445.66,204.54,447.92Z'
            style={{
              fillOpacity: 0.7,
              opacity: 0.2,
              transformOrigin: "208.551537px 445.600891px",
            }}
            className='animable'
            id='elld7s19776jr'
          />
        </g>
      </g>
      <path
        d='M211.38,443.34c3.64.59-.36,8.05-5.3,5.78S207.73,442.75,211.38,443.34Z'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "208.549797px 446.415544px",
        }}
        id='elgc03u8tals'
        className='animable'
      />
      <path
        d='M181,448.61c-9.57-2.22-17.93-5.4-18.39-9.75-.7-6.63,6.37-8.44,14.79-8.18C177.8,431,186,438.92,181,448.61Z'
        style={{
          fill: "rgb(255, 255, 255)",
          transformOrigin: "172.586456px 439.633057px",
        }}
        id='eljmzj4zks99p'
        className='animable'
      />
      <g
        style={{
          clipPath: "url(&quot",
          transformOrigin: "172.597618px 438.767899px",
        }}
        id='elwyaaq0i5qj'
        className='animable'
      >
        <g id='elre634zt0x59'>
          <path
            d='M162.63,438.71a62.12,62.12,0,0,1,11.24,5.53,37.82,37.82,0,0,0,7.9,2.64c3.23-8.88-4-15.87-4.34-16.2C169.08,430.42,162.05,432.2,162.63,438.71Z'
            style={{
              fillOpacity: 0.7,
              opacity: 0.2,
              transformOrigin: "172.597618px 438.767899px",
            }}
            className='animable'
            id='elp3f38lxd36e'
          />
        </g>
      </g>
      <path
        d='M181,448.61c-9.57-2.22-17.93-5.4-18.39-9.75-.7-6.63,6.37-8.44,14.79-8.18C177.8,431,186,438.92,181,448.61Z'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "172.586455px 439.633051px",
        }}
        id='elc2jv25ellio'
        className='animable'
      />
      <path
        d='M187.86,440.38h-.06a1,1,0,0,1-1-.95c-.2-4.18-3.42-7.57-3.45-7.61a1,1,0,0,1,1.44-1.38c.16.16,3.77,3.95,4,8.89A1,1,0,0,1,187.86,440.38Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "185.956337px 435.281775px",
        }}
        id='el5ey3stmhniw'
        className='animable'
      />
      <path
        d='M191.86,440.62h-.08a1,1,0,0,1-1-1c-.09-4.22-3-7.87-3.06-7.91a1,1,0,0,1,1.54-1.27,16.64,16.64,0,0,1,3.52,9.14A1,1,0,0,1,191.86,440.62Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "190.155292px 435.371556px",
        }}
        id='el0eup2rrfh21t'
        className='animable'
      />
      <path
        d='M196.65,440.12h0a1,1,0,0,1-1.08-.91c-.31-3.5-3.29-8-3.32-8a1,1,0,1,1,1.66-1.11c.14.2,3.3,4.94,3.65,9A1,1,0,0,1,196.65,440.12Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "194.804707px 434.866208px",
        }}
        id='el5adxqcgnwa9'
        className='animable'
      />
      <path
        d='M201.17,439.64a.83.83,0,0,1-.27,0,1,1,0,0,1-.82-1.15c.71-4.25-3.23-7.89-3.27-7.92a1,1,0,0,1,1.34-1.49c.19.18,4.8,4.4,3.91,9.74A1,1,0,0,1,201.17,439.64Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "199.327706px 434.238626px",
        }}
        id='elxqed30d6e3k'
        className='animable'
      />
      <path
        d='M206.09,438.46a1.22,1.22,0,0,1-.33,0,1,1,0,0,1-.75-1.2c.87-3.79-2.86-8.07-2.9-8.11a1,1,0,1,1,1.49-1.33c.19.21,4.46,5.09,3.36,9.89A1,1,0,0,1,206.09,438.46Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "204.480432px 432.958489px",
        }}
        id='ellnfgysr9o7o'
        className='animable'
      />
      <path
        d='M310,431l1.45,4.22s-1.85,7.77-13.32,10.22-18.07,5.74-23.61,6.66a47,47,0,0,1-8.83.79l-1.32-1.58Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "287.910019px 441.945343px",
        }}
        id='elcf0ocxe13wl'
        className='animable'
      />
      <path
        d='M242.64,437.7l21.76,13.65A231.22,231.22,0,0,0,292.76,444h0c9.29-3.21,17.27-7.25,17.27-11.63,0-6.66-7.23-7.72-15.57-6.58-1.56.2-3.15.49-4.75.83-13.24,2.85-31-2.75-31-2.75Z'
        style={{
          fill: "#00D59C",
          transformOrigin: "276.334999px 437.610001px",
        }}
        id='elzjtjh76b9z'
        className='animable'
      />
      <g
        style={{
          clipPath: "url(&quot",
          transformOrigin: "262.040001px 434.76503px",
        }}
        id='ela8364enmv2n'
        className='animable'
      >
        <g id='elixaeoz6cw9'>
          <path
            d='M242.64,437.7l12.8,8a51.6,51.6,0,0,0,26-18.31,86.41,86.41,0,0,1-22.76-3.56Z'
            style={{
              fillOpacity: 0.7,
              opacity: 0.2,
              transformOrigin: "262.040001px 434.76503px",
            }}
            className='animable'
            id='eleyo0jjpddl8'
          />
        </g>
      </g>
      <path
        d='M242.64,437.7l21.76,13.65A231.22,231.22,0,0,0,292.76,444h0c9.29-3.21,17.27-7.25,17.27-11.63,0-6.66-7.23-7.72-15.57-6.58-1.56.2-3.15.49-4.75.83-13.24,2.85-31-2.75-31-2.75Z'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "276.334999px 437.610001px",
        }}
        id='elvu0k05919jk'
        className='animable'
      />
      <path
        d='M292.76,444c9.29-3.21,17.27-7.25,17.27-11.63,0-6.66-7.23-7.72-15.57-6.58C294.13,426.17,286.85,434.87,292.76,444Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "300.242376px 434.696604px",
        }}
        id='elzq0eeyuseyq'
        className='animable'
      />
      <path
        d='M285.1,436.53h.06a1,1,0,0,0,.94-1.06c-.24-4.17,2.6-7.89,2.63-7.92a1,1,0,1,0-1.58-1.23c-.14.17-3.33,4.33-3,9.26A1,1,0,0,0,285.1,436.53Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "286.53443px 431.23093px",
        }}
        id='ela0ylpzt697m'
        className='animable'
      />
      <path
        d='M281.15,437.19h.08a1,1,0,0,0,.91-1.08,14.73,14.73,0,0,1,2.22-8.18,1,1,0,0,0-.29-1.39,1,1,0,0,0-1.38.29,16.59,16.59,0,0,0-2.54,9.45A1,1,0,0,0,281.15,437.19Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "282.332166px 431.784424px",
        }}
        id='elibghq1t9vbb'
        className='animable'
      />
      <path
        d='M276.33,437.19h0a1,1,0,0,0,1-1c-.06-3.52,2.43-8.29,2.46-8.34a1,1,0,1,0-1.77-.93c-.11.21-2.76,5.27-2.69,9.3A1,1,0,0,0,276.33,437.19Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "277.622316px 431.77703px",
        }}
        id='elpdjdx3tvb6'
        className='animable'
      />
      <path
        d='M271.78,437.19a1.26,1.26,0,0,0,.27,0,1,1,0,0,0,.7-1.23c-1.15-4.15,2.39-8.18,2.42-8.22a1,1,0,0,0-.07-1.41,1,1,0,0,0-1.42.07c-.17.2-4.31,4.88-2.86,10.09A1,1,0,0,0,271.78,437.19Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "272.970047px 431.632375px",
        }}
        id='eltpysoudp8jl'
        className='animable'
      />
      <path
        d='M266.77,436.53a1,1,0,0,0,.33-.06,1,1,0,0,0,.62-1.27c-1.26-3.67,2-8.32,2-8.37a1,1,0,0,0-1.62-1.16c-.16.23-3.9,5.53-2.3,10.18A1,1,0,0,0,266.77,436.53Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "267.631232px 430.925334px",
        }}
        id='el95lcmg8bete'
        className='animable'
      />
      <path
        d='M262,441.94c-3.56,1,1.2,8,5.87,5.19S265.59,441,262,441.94Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "265.094831px 444.784039px",
        }}
        id='elvqf7h5qxid8'
        className='animable'
      />
      <path
        d='M167,383.57c13.18-2.31,48.19,16.11,69.64,28.38a44.16,44.16,0,0,0,6-4c4.94-4.4,23.79-28.63,36.79-34.17l23.74,31.06c-5.35,7.49-21.18,15.76-37,22.58a74.63,74.63,0,0,1-9.9,12.93c-9.71,10-13.67,4.39-13.67,4.39s-6.14-.69-15.2-1.93a4.29,4.29,0,0,1-4.58,2.58c-1.18-.19-3.45-1.87-6-4.1-22.88-3.44-53.92-9.18-62.31-15.94C140.84,414.33,155.31,385.61,167,383.57Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "226.066284px 410.04422px",
        }}
        id='eldb10jmtodhi'
        className='animable'
      />
      <path
        d='M131.62,295c2.48,8,2.68,19.46.65,28.4,0,0-8.88,39.28-10,47.83S106.16,413,105.37,423.86l-6.91,9.94s-10.1-.76-16.83-8.42l4.75-10.53s4.35-16.19,5.93-18.44,6.78-32.79,8.53-37.78,12.27-71.5,21.45-80c0,0,2.45-.2,3.45,1.73'
        style={{
          fill: "#00D59C",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "107.640635px 356.212036px",
        }}
        id='el5mfkkw7bm4v'
        className='animable'
      />
      <path
        d='M265.12,421.45c-4.68-1.94-11.4,0-11.4,0s-22.07-9.61-37.19-18.76-36.79-16-36.79-16c-8.31-.59-12.26-.4-16.22,4'
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "214.319992px 403.948645px",
        }}
        id='el18vl5f4kgdb'
        className='animable'
      />
      <path
        d='M153.43,416.61s-.11,6.7,9.39,11.35'
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "158.124959px 422.284988px",
        }}
        id='el9ot73a56h1i'
        className='animable'
      />
      <path
        d='M258.27,388.65s-15,10.85-18,18a61.48,61.48,0,0,0-8.52,4.39'
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "245.009972px 399.844986px",
        }}
        id='elh6e734oaga'
        className='animable'
      />
      <path
        d='M239.18,397.67a17.15,17.15,0,0,0-.53,9.7'
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "238.684144px 402.52002px",
        }}
        id='elca4915kdlt4'
        className='animable'
      />
      <path
        d='M242.64,390.63a26.75,26.75,0,0,0-2.15,3.75'
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "241.564995px 392.505005px",
        }}
        id='elxahwk4nzjjf'
        className='animable'
      />
      <path
        d='M221.28,389.64s-5,6.7-6.27,12.15'
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "218.144997px 395.715012px",
        }}
        id='elurem8jlkwzs'
        className='animable'
      />
      <path
        d='M193.33,430.19a43.44,43.44,0,0,1-5.57-.68'
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "190.544998px 429.850006px",
        }}
        id='el9t5tjzh0ho7'
        className='animable'
      />
      <path
        d='M240.4,425.38a267.68,267.68,0,0,1-43.13,5'
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "218.834984px 427.88002px",
        }}
        id='el84b2zc88529'
        className='animable'
      />
      <path
        d='M235.52,308a11.56,11.56,0,0,0,0,10.66'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "234.868966px 313.330002px",
        }}
        id='elk7eg0ly2fs'
        className='animable'
      />
      <path
        d='M156.26,278c6.9,4.28,16.58,7.9,23.82,2.34'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "168.169991px 280.586744px",
        }}
        id='el34u7vh8hh14'
        className='animable'
      />
      <path
        d='M150.81,274.12c.94.8,1.92,1.54,2.92,2.25'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "152.269997px 275.244995px",
        }}
        id='elimatzzw1n3'
        className='animable'
      />
      <path
        d='M210.16,300.8c-.41,3.81-.76,8.35-2.81,11.69'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "208.755005px 306.644989px",
        }}
        id='el3jh9jbfoau2'
        className='animable'
      />
      <path
        d='M210.6,295.29c0,1-.13,2.07-.21,3.11'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "210.495003px 296.845001px",
        }}
        id='elmhzmkhxyu0m'
        className='animable'
      />
      <path
        d='M214.32,312.49s-2.39,2.53-6.91,1.37'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "210.865005px 313.327153px",
        }}
        id='el8ga1hlcfksf'
        className='animable'
      />
      <path
        d='M137.41,302.6s-.3,16.42-5.79,23.64'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "134.515007px 314.419998px",
        }}
        id='el6w4mmbueiki'
        className='animable'
      />
      <path
        d='M168.66,374l-3.9-.93'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "166.710007px 373.535004px",
        }}
        id='el7u8izguzxgt'
        className='animable'
      />
      <path
        d='M217.32,368.92c-5.61.08-10.61,4.08-15.61,8.08-10,6-20-2-30.4-2.45'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "194.31501px 374.071197px",
        }}
        id='elekrsuerqtqj'
        className='animable'
      />
      <path
        d='M139.78,365.76c-.87,6.29-1.83,12.57-3.16,18.77'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "138.199997px 375.145004px",
        }}
        id='elxl0f3lpf03q'
        className='animable'
      />
      <path
        d='M140.77,358c-.17,1.52-.36,3-.56,4.55'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "140.490005px 360.274994px",
        }}
        id='elda9yy2ldg6k'
        className='animable'
      />
      <path
        d='M195.62,336.11c-6.31,10.72-15.37,22.95-28.14,26'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "181.549995px 349.109985px",
        }}
        id='elq4hjbpfq6yd'
        className='animable'
      />
      <path
        d='M202.49,322.38a101.28,101.28,0,0,1-5.35,11.05'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "199.814995px 327.904984px",
        }}
        id='elrafhox5qeo'
        className='animable'
      />
      <path
        d='M120.68,316.28C115.89,328,111,342,102.4,351.58'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "111.540001px 333.929993px",
        }}
        id='el3olo9tsfibw'
        className='animable'
      />
      <path
        d='M124,308c-.66,1.75-1.35,3.5-2,5.25'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "123px 310.625px",
        }}
        id='el4stv52zsdt6'
        className='animable'
      />
      <path
        d='M108.53,386.43s-11.47,9.43-16.22,10'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "100.419998px 391.429993px",
        }}
        id='el98egxvjpegd'
        className='animable'
      />
      <path
        d='M89.23,426.47c-2.17-1.19-4.73-2.69-5.83-5'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "86.315002px 423.970001px",
        }}
        id='elx102uzd5nd'
        className='animable'
      />
      <path
        d='M97.13,429.94c-1.72-.6-3.41-1.29-5.07-2.05'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "94.594997px 428.915009px",
        }}
        id='eld979c017r7'
        className='animable'
      />
      <path
        d='M255.09,297.46a8.8,8.8,0,0,0,4.6,2.51'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "257.389999px 298.715012px",
        }}
        id='el49ajjkv5iyb'
        className='animable'
      />
      <path
        d='M250,290a28.52,28.52,0,0,0,2.83,4.83'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "251.415009px 292.414993px",
        }}
        id='el2f6agxgwvm7'
        className='animable'
      />
      <path
        d='M152.29,269.81s7,10.09,19,8.71c6.62-.77,5.94-5.87,5.94-5.87a4.88,4.88,0,0,1-2-2.56c-.71-1.81-1-4.76.67-9.37,0-.13.09-.27.14-.4,1.88-5-20.77-12.07-20.77-12.07S158,261.31,152.29,269.81Z'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "164.76987px 263.449829px",
        }}
        id='elqtm6g8irpua'
        className='animable'
      />
      <path
        d='M163.26,257.24s4.2,10.47,12,12.85c-.71-1.81-1-4.76.67-9.37Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "169.594994px 263.664993px",
        }}
        id='elyenr1th6k9a'
        className='animable'
      />
      <path
        d='M161.19,254.78c-.53,4.49,10.91,11.28,17.61,11.26,3.06,0,7.3-5.91,9.1-14.62.9-4.4-1.79-8.71.39-14.84,1.86-5.24-1.78-20.87-17.21-22.15-22.05-1.83-24.62,21.81-14.85,37.76'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "169.772161px 240.184937px",
        }}
        id='elkucerf9r9v'
        className='animable'
      />
      <path
        d='M188.74,235.4a5.18,5.18,0,0,0-5.39-2'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "186.045006px 234.329913px",
        }}
        id='el1c8m6kahula'
        className='animable'
      />
      <path
        d='M176,233.28s-4.55-.46-7.32,2.12'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "172.339996px 234.324104px",
        }}
        id='elcsdc7t93k2i'
        className='animable'
      />
      <path
        d='M182.16,236.38c-.4,4.55,4.75,12.17,3.46,13.26s-4.35-.4-5.54-1'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "182.953981px 243.204049px",
        }}
        id='elx99qz85typg'
        className='animable'
      />
      <ellipse
        cx={174.15}
        cy={240.39}
        rx={0.89}
        ry={1.24}
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "174.15px 240.39px",
        }}
        id='els2nv03opavn'
        className='animable'
      />
      <ellipse
        cx={184.94}
        cy={240.39}
        rx={0.89}
        ry={1.24}
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "184.94px 240.39px",
        }}
        id='elh2b9ezsrjrn'
        className='animable'
      />
      <path
        d='M182.06,254.48s-5.24.7-7.91-2.07'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "178.104996px 253.484442px",
        }}
        id='el0ih5b726p7to'
        className='animable'
      />
      <path
        d='M175,253.15a4,4,0,0,0,3.06,3.21c2.77.69,2.67-1.8,2.67-1.8'
        style={{
          fill: "none",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "177.865225px 254.815411px",
        }}
        id='el3ar9k6pmw6q'
        className='animable'
      />
      <path
        d='M167.22,224.52s24.53,6.72,27.1-3.66c0,0-4.46.53-9.38-4.85-6-6.6-15.74-8.31-23.95-5.34s-7.71,7.27-7.71,7.27-4.85.64-7,6.48,1.26,26.47,9.49,30.85l2.28-2.86s-.91-5.89,3-10.29l2.18.56s-2.37-5.1.1-7.88A14.6,14.6,0,0,0,167.22,224.52Z'
        style={{
          fill: "rgb(38, 50, 56)",
          transformOrigin: "169.985512px 232.266518px",
        }}
        id='elk8st7r6szbr'
        className='animable'
      />
      <path
        d='M161,241.63s-2.47-7.12-5.63-5.25.29,15.53,5.63,12.47'
        style={{
          fill: "rgb(255, 255, 255)",
          stroke: "rgb(38, 50, 56)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transformOrigin: "157.581242px 242.680955px",
        }}
        id='elr7d9rfqw6ac'
        className='animable'
      />
      <g id='elnvuxa23x1jf'>
        <path
          d='M161,218.74s15.25,2.57,19.78-3.56'
          style={{
            fill: "none",
            stroke: "rgb(255, 255, 255)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            opacity: 0.3,
            transformOrigin: "170.889999px 217.227297px",
          }}
          className='animable'
          id='elduyyvabamad'
        />
      </g>
      <g id='eltxagfthkmeo'>
        <path
          d='M170.88,222.3s10.6,3.56,17.86,0'
          style={{
            fill: "none",
            stroke: "rgb(255, 255, 255)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            opacity: 0.3,
            transformOrigin: "179.810005px 223.091114px",
          }}
          className='animable'
          id='el0vu8ixrp6sfc'
        />
      </g>
      <g id='el6c8d45xmr35'>
        <path
          d='M157.57,223.88s-.15,8.79-8.26,11.52'
          style={{
            fill: "none",
            stroke: "rgb(255, 255, 255)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            opacity: 0.3,
            transformOrigin: "153.44001px 229.640007px",
          }}
          className='animable'
          id='elmb6h9ajp79o'
        />
      </g>
    </g>
    <defs>
      <clipPath id='freepik--clip-path--inject-39'>
        <path
          d='M460.43,106.79v146a6.7,6.7,0,0,1-6.7,6.7H171a6.71,6.71,0,0,1-6.71-6.7v-146a6.71,6.71,0,0,1,6.71-6.7H453.73A6.7,6.7,0,0,1,460.43,106.79Z'
          style={{
            fill: "#fff",
            stroke: "#263238",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </clipPath>
      <clipPath id='freepik--clip-path-2--inject-39'>
        <path
          d='M261.12,192v-6.37l-4.78-.41a13.64,13.64,0,0,0-1.18-2.87l3.08-3.66-4.51-4.51-3.66,3.08a13.64,13.64,0,0,0-2.87-1.18l-.41-4.77h-6.37L240,176.1a13.78,13.78,0,0,0-2.86,1.18l-3.66-3.08L229,178.71l3.08,3.66a13.64,13.64,0,0,0-1.18,2.87l-4.78.41V192l4.78.42a13.78,13.78,0,0,0,1.18,2.86L229,199l4.51,4.51,3.66-3.08a13.26,13.26,0,0,0,2.86,1.18l.42,4.78h6.37l.41-4.78a13.13,13.13,0,0,0,2.87-1.18l3.66,3.08,4.51-4.51-3.08-3.66a13.78,13.78,0,0,0,1.18-2.86Zm-17.52,4.23a7.41,7.41,0,1,1,7.41-7.41A7.41,7.41,0,0,1,243.6,196.25Z'
          style={{
            fill: "#92E3A9",
            stroke: "#263238",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </clipPath>
      <clipPath id='freepik--clip-path-3--inject-39'>
        <path
          d='M229.92,206.88v-4.54l-3.4-.29a9.13,9.13,0,0,0-.84-2l2.2-2.61-3.21-3.21-2.61,2.2a9.13,9.13,0,0,0-2-.84l-.29-3.4h-4.54l-.29,3.4a9.13,9.13,0,0,0-2,.84l-2.6-2.2-3.21,3.21,2.19,2.61a9.13,9.13,0,0,0-.84,2l-3.4.29v4.54l3.4.29a9.13,9.13,0,0,0,.84,2l-2.19,2.6,3.21,3.21,2.6-2.19a9.13,9.13,0,0,0,2,.84l.29,3.4h4.54l.29-3.4a9.13,9.13,0,0,0,2-.84l2.61,2.19,3.21-3.21-2.2-2.6a9.13,9.13,0,0,0,.84-2Zm-12.46,3a5.27,5.27,0,1,1,5.27-5.27A5.27,5.27,0,0,1,217.46,209.88Z'
          style={{
            fill: "#92E3A9",
            stroke: "#263238",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </clipPath>
      <clipPath id='freepik--clip-path-4--inject-39'>
        <path
          d='M254,281.64c2.05-2.89,15.55,5.15,13.89,10.86s-7.06,5.09-10.22,2.06S251.81,284.73,254,281.64Z'
          style={{
            fill: "#92E3A9",
            stroke: "#263238",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </clipPath>
      <clipPath id='freepik--clip-path-5--inject-39'>
        <path
          d='M255.61,274.57l-7.6,2.52c-.81.21-2.4-1.13-2.33-2l2.26-26.58a2.54,2.54,0,0,1,1.89-2.24l8.43-1.83c.8-.21,2.83.75,2.76,1.58l-3.51,26.27A2.55,2.55,0,0,1,255.61,274.57Z'
          style={{
            fill: "#92E3A9",
            stroke: "#263238",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </clipPath>
      <clipPath id='freepik--clip-path-6--inject-39'>
        <path
          d='M202.55,272c10,.15,33,36,33,36L250,290l4-8.34s2,15,13.89,10.86c0,0-10.47,39.38-22.22,44.13S201.34,308,201.34,308Z'
          style={{
            fill: "#92E3A9",
            stroke: "#263238",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </clipPath>
      <clipPath id='freepik--clip-path-7--inject-39'>
        <path
          d='M206.62,295c.4,7.28.57,14.84.86,20.48.72,13.63,9.84,53.47,9.84,53.47s10,6,10.5,17-60.61,42-77,33.16-14.19-34.52-14.19-34.52-24.26-98-14.33-105.88,13.28-6.9,38.7-10.42S202.55,272,202.55,272a10.44,10.44,0,0,1,2.91,5.13'
          style={{
            fill: "#92E3A9",
            stroke: "#263238",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </clipPath>
      <clipPath id='freepik--clip-path-8--inject-39'>
        <path
          d='M230.21,437.09,210,453a231.08,231.08,0,0,1-29-4.33h0c-9.57-2.22-17.93-5.4-18.39-9.75-.7-6.63,6.37-8.44,14.79-8.18,1.57,0,3.18.15,4.81.32,13.47,1.45,30.58-6,30.58-6Z'
          style={{
            fill: "#92E3A9",
            stroke: "#263238",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </clipPath>
      <clipPath id='freepik--clip-path-9--inject-39'>
        <path
          d='M211.38,443.34c3.64.59-.36,8.05-5.3,5.78S207.73,442.75,211.38,443.34Z'
          style={{
            fill: "#fff",
            stroke: "#263238",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </clipPath>
      <clipPath id='freepik--clip-path-10--inject-39'>
        <path
          d='M181,448.61c-9.57-2.22-17.93-5.4-18.39-9.75-.7-6.63,6.37-8.44,14.79-8.18C177.8,431,186,438.92,181,448.61Z'
          style={{
            fill: "#fff",
            stroke: "#263238",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </clipPath>
      <clipPath id='freepik--clip-path-11--inject-39'>
        <path
          d='M242.64,437.7l21.76,13.65A231.22,231.22,0,0,0,292.76,444h0c9.29-3.21,17.27-7.25,17.27-11.63,0-6.66-7.23-7.72-15.57-6.58-1.56.2-3.15.49-4.75.83-13.24,2.85-31-2.75-31-2.75Z'
          style={{
            fill: "#92E3A9",
            stroke: "#263238",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </clipPath>
    </defs>
    <defs>
      <filter id='active' height='200%'>
        <feMorphology
          in='SourceAlpha'
          result='DILATED'
          operator='dilate'
          radius={2}
        />
        <feFlood floodColor='#32DFEC' floodOpacity={1} result='PINK' />
        <feComposite in='PINK' in2='DILATED' operator='in' result='OUTLINE' />
        <feMerge>
          <feMergeNode in='OUTLINE' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
      <filter id='hover' height='200%'>
        <feMorphology
          in='SourceAlpha'
          result='DILATED'
          operator='dilate'
          radius={2}
        />
        <feFlood floodColor='#ff0000' floodOpacity={0.5} result='PINK' />
        <feComposite in='PINK' in2='DILATED' operator='in' result='OUTLINE' />
        <feMerge>
          <feMergeNode in='OUTLINE' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
        <feColorMatrix
          type='matrix'
          values='0   0   0   0   0                0   1   0   0   0                0   0   0   0   0                0   0   0   1   0 '
        />
      </filter>
    </defs>
  </svg>
)