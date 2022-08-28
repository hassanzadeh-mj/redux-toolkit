import { Dimmer,Loader } from "semantic-ui-react";

const LoaderComponent = ({inverted,content}) => {
    return ( 
<Dimmer active inverted={inverted}>
    <Loader content={content}/>
</Dimmer>
 );
}
 
export default LoaderComponent;