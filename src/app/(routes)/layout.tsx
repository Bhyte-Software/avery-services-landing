import { ConsentManager } from "@/components/common/consent-manager";
import LenisWrapper from "@/components/common/lenis-wrapper";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <LenisWrapper>
            <ConsentManager>
                {children}
            </ConsentManager>
        </LenisWrapper>
    );
};

export default MainLayout;
