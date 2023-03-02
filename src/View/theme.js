import { extendTheme } from "native-base";
const theme = extendTheme(
    {
        components:{
            Heading:{
                variants:{
                    title1:{
                        bg: '#2BB71D '
                    },
                    title2:{
                        bg: '#13CAB6 '
                    }
                }

            }



        }
    }
);
export default theme;