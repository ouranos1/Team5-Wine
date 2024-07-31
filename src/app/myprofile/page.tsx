import SlideComponent from "@/components/slidecomponent/SlideComponent";
import { SildeOptionProps } from "@/types/SlideOption";
import "@/components/slidecomponent/SlideComponent.scss";

function MyProfile() {

    const testoption:SildeOptionProps = {
        SlideOptionTitle : "test옵션타이틀",
        LeftOption : "test레프트옵션",
        RightOption : "test라이트옵션",
        value : 70
    };

    return (
        <div>
            <SlideComponent {...testoption}/>
        </div>
    );
}

export default MyProfile;