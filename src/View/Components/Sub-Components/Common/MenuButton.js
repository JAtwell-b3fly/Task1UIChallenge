import { Menu,Box,ThreeDotsIcon,Pressable, Center} from 'native-base';
import menuItems from './MenuItems';

function renderMenuItems()
{
    const menuRender = [];
    for(let i = 0; i<menuItems.length;i++ )
    {
        const men = <Menu.Item key = {i+1}>{menuItems[i]}</Menu.Item>
        menuRender.push(men);

    }

    return menuRender;
}
export default function MenuButton()
{
    const menuItemsOp = renderMenuItems();
    return(

        <Box >
            <Menu  trigger={triggerProps => {
      return <Pressable pt = "1.5" boxSize={"10"} borderColor = {"black"} shadow = {'2'} borderRadius = "full"  bgColor={"lightBlue.200"} accessibilityLabel="More options menu" {...triggerProps}>
        <Center>
        <ThreeDotsIcon color = {"blue.400"} size = {"7"}  />

        </Center>
              
            </Pressable>;
    }}>

        {menuItemsOp}

    </Menu>
        
    

        </Box>
       

    );
}