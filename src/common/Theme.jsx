export const color = {
    Red100: '#FD346E',
    Green100: '#01D0A2',
    Green200: '#00D59C',
    Blue100: '#009CD5',
    Purple100: '#9747FF',
    White: '#FAFAFA',
    Black: '#000000',
    // background: linear-gradient(90deg, #00D59C 0%, #009CD5 100%);

}

export const Theme ={
    typography: {
        component: {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            subline1: "p",
            subline2: "p",
            body1: "p",
            body2: "p",
            button: "span",
            caption: "span",
            overLine: "span",
        },
        fontSize: {
            h1: "64px",
            h2: "48px",
            h3: "33px",
            h4: "23px",
            h5: "16px",
            h6: "14px",
            subline1: "21px",
            subline2: "18px",
            body1: "21px",
            body2: "18px",
            button: "16px",
            caption: "14px",
            overLine: "13px",
        },
        lineHeight: {
            h1: "-1.5px",
            h2: "-0.5px",
            h3: "0",
            h4: "0.25px",
            h5: "0",
            h6: "0.15px",
            subline1: "0.15px",
            subline2: "0.1px",
            body1: "0.5px",
            body2: "0.15px",
            button: "1.25px",
            caption: "0.4px",
            overLine: "1.25px",
        },
        fontWeights: {
            thin: "100",
            extraLight: "200",
            light: "300",
            regular: "400",
            medium: "500",
            semiBold: "600",
            bold: "700",
        },
    },
    button: {
        primary: {
            // backgroundColor: `linear-gradient(90deg, ${color.Green200} 0%, ${color.Blue100} 100%)`,
            // backgourndColor: color.Green100,
            color: 'red',
            border: `none`,
            borderRadius:'20px',
            hover: {
                background: color.Black, 
                transition: '0.2s',
              },
                },
        size: {
            small: {
                width: '110px',
            },
            medium: {
                width: '135px',
            }
        },
        secondary: {
            // backgroundColor: `linear-gradient(90deg, ${color.Green200} 0%, ${color.Blue100} 100%)`,
            // backgourndColor: color.Green100,
            color: 'blue',
            border: `none`,
            borderRadius:'20px',
            hover: {
                background: color.Black, 
                transition: '0.2s',
              },
                },
        size: {
            small: {
                width: '110px',
            },
            medium: {
                width: '135px',
            }
        },

    },
}