import { extendTheme } from "native-base";
const theme = extendTheme(
    {
        components:{
            Heading:{
                variants:{
                    title1:{
                        color: '#2BB71D'
                    },
                    title2:{
                        color: '#13CAB6'
                    }
                }

            }



        }
    }
);
export default theme;