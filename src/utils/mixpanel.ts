import mixpanel, { Config } from "mixpanel-browser";

// Ensure the environment variable is set properly
const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN;
console.log(MIXPANEL_TOKEN);

if (!MIXPANEL_TOKEN) {
    console.warn("⚠️ Mixpanel token is missing! Events will not be tracked.");
} else {
    try {
        const config: Partial<Config> = {
            debug: process.env.NODE_ENV !== "production",
        };
        mixpanel.init(MIXPANEL_TOKEN, config);
        console.log("✅ Mixpanel Initialized Successfully");
    } catch (error) {
        console.error("❌ Mixpanel initialization failed:", error);
    }
}

const Mixpanel = {
    track: (event: string, properties?: Record<string, any>) => {
        if (MIXPANEL_TOKEN) {
            try {
                mixpanel.track(event, properties);
                console.log(`📡 Mixpanel Event Tracked: ${event}`, properties);
            } catch (error) {
                console.error(`❌ Failed to track Mixpanel event: ${event}`, error);
            }
        }
    },

    identify: (userId: string) => {
        if (MIXPANEL_TOKEN) {
            try {
                mixpanel.identify(userId);
                console.log(`👤 Mixpanel User Identified: ${userId}`);
            } catch (error) {
                console.error("❌ Mixpanel identify error:", error);
            }
        }
    },

    reset: () => {
        if (MIXPANEL_TOKEN) {
            try {
                mixpanel.reset();
                console.log("🔄 Mixpanel Reset");
            } catch (error) {
                console.error("❌ Mixpanel reset error:", error);
            }
        }
    },
};

export default Mixpanel;
