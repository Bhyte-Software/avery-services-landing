import LenisWrapper from "@/components/common/lenis-wrapper";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <LenisWrapper>
            {children}
        </LenisWrapper>
    );
};

export default MainLayout;
