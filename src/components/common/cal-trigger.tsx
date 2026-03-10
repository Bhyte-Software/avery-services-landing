import { getCalApi } from "@calcom/embed-react";
import { ReactNode, useEffect } from "react";

export default function CalTrigger({ children }: { children: ReactNode }) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "demo" });
            cal("ui", {
                "theme": "light",
                "cssVarsPerTheme": {
                    "light": { "cal-brand": "#FF5400" },
                    "dark": { "cal-brand": "#FF5400" }
                },
                "hideEventTypeDetails": false,
                "layout": "month_view"
            });
        })();
    }, [])

    return (
        <div
            data-cal-namespace="demo"
            data-cal-link="culio/demo"
            data-cal-origin="https://cal.eu"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"}'
        >
            {children}
        </div>
    );
}
