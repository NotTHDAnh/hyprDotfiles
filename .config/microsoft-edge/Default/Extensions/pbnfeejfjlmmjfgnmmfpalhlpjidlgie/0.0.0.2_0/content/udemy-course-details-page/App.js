import '../../chunks/storage-keys-0974cdc0.js';
import { d as reactDom, r as react, u as useCourses, C as ChakraProvider, B as Banner, k as Button, T as Text, A as Badge } from '../../chunks/sentry-e6c0bb4b.js';

var CouponState;
(function (CouponState) {
    CouponState[CouponState["NotFound"] = 0] = "NotFound";
    CouponState[CouponState["Pending"] = 1] = "Pending";
    CouponState[CouponState["Applied"] = 2] = "Applied";
    CouponState[CouponState["Expired"] = 3] = "Expired";
})(CouponState || (CouponState = {}));

function determineCouponStateAsync(delay = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let state = CouponState.Pending;
            if (isCouponSuccessfullyApplied()) {
                state = CouponState.Applied;
            }
            else if (isCouponExpired()) {
                state = CouponState.Expired;
            }
            resolve(state);
        }, delay);
    });
}
function isCouponSuccessfullyApplied() {
    const couponSuccessEle = document.querySelector('[data-purpose="code-text"]');
    return !!couponSuccessEle;
}
function isCouponExpired() {
    const couponErrorEle = document.querySelector('[data-purpose="coupon-form-error"]');
    return !!couponErrorEle;
}

function changeInputValue(input, value) {
    var _a;
    const nativeInputValueSetter = (_a = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")) === null || _a === void 0 ? void 0 : _a.set;
    nativeInputValueSetter === null || nativeInputValueSetter === void 0 ? void 0 : nativeInputValueSetter.call(input, value);
    const inputEvent = new Event("input", { bubbles: true });
    input.dispatchEvent(inputEvent);
}

function ApplyCouponButton(props) {
    const { couponCode, onCouponApplied } = props;
    const [isLoading, setIsLoading] = react.useState(false);
    function applyCoupon() {
        setIsLoading(true);
        const showCouponInputEle = document.querySelector('[data-purpose="no-coupon-button"]');
        if (showCouponInputEle) {
            showCouponInputEle.click();
        }
        const couponInputEle = document.querySelector('[data-purpose="coupon-input"]');
        if (!couponInputEle) {
            console.error('unable to find the coupon input');
            return;
        }
        changeInputValue(couponInputEle, couponCode);
        const couponSubmitButtonEle = document.querySelector('[data-purpose="coupon-submit"]');
        if (!couponSubmitButtonEle) {
            console.error('unable to find the coupon submit button');
            return;
        }
        couponSubmitButtonEle.click();
        onCouponApplied();
    }
    return (react.createElement(Button, { isLoading: isLoading, loadingText: "Applying", colorScheme: "orange", size: "lg", fontSize: "2xl", variant: "solid", onClick: applyCoupon }, "Apply"));
}
function BannerContent$2(props) {
    const { couponCode, discountPercentage } = props;
    return (react.createElement(Text, { fontWeight: "bold", as: "span", fontSize: "3xl" },
        "Use ",
        react.createElement(Badge, { fontSize: "xl" }, couponCode),
        " coupon code to get ",
        react.createElement(Badge, { fontSize: "xl" }, discountPercentage),
        " \uD83D\uDE0B"));
}
function CouponAvailableBanner(props) {
    const { couponCode, onCouponApplied, discountPercentage } = props;
    return (react.createElement(Banner, { actionButton: react.createElement(ApplyCouponButton, { couponCode: couponCode, onCouponApplied: onCouponApplied }), bannerContent: react.createElement(BannerContent$2, { couponCode: couponCode, discountPercentage: discountPercentage }) }));
}

function BannerContent$1() {
    return react.createElement(Text, { as: "span", fontWeight: "bold" }, "Coupon successfully applied \uD83E\uDD73");
}
function CouponAppliedBanner() {
    return (react.createElement(Banner, { bgColor: "green.400", bannerContent: react.createElement(BannerContent$1, null) }));
}

function BannerContent() {
    return react.createElement(Text, { as: "span", fontWeight: "bold" }, "Coupon has expired \uD83E\uDD37\u200D\u2642\uFE0F");
}
function CouponExpiredBanner() {
    return (react.createElement(Banner, { bgColor: "red.400", bannerContent: react.createElement(BannerContent, null) }));
}

function CourseDetailsPage() {
    const [couponState, setCouponState] = react.useState(CouponState.NotFound);
    const [courseDetails, setCourseDetails] = react.useState();
    const courses = useCourses();
    react.useEffect(() => {
        const currentUrl = location.href.split('?')[0];
        const courseDetails = courses.freeCourses[currentUrl] || courses.coursesWithCoupon[currentUrl];
        if (courseDetails) {
            setCourseDetails(courseDetails);
            if (!courseDetails.isAlreadyAFreeCourse) {
                determineCouponStateAsync().then(setCouponState);
            }
        }
    }, [courses]);
    function onCouponApplied() {
        determineCouponStateAsync().then(setCouponState);
    }
    if (courseDetails === null || courseDetails === void 0 ? void 0 : courseDetails.isAlreadyAFreeCourse) {
        return react.createElement("div", null, "Already a free course!");
    }
    return (react.createElement(ChakraProvider, null,
        couponState === CouponState.Pending && (react.createElement(CouponAvailableBanner, { couponCode: courseDetails.couponData.couponCode, discountPercentage: courseDetails.couponData.discountPercentage + '%', onCouponApplied: onCouponApplied })),
        couponState === CouponState.Applied && react.createElement(CouponAppliedBanner, null),
        couponState === CouponState.Expired && react.createElement(CouponExpiredBanner, null)));
}

const rootEle = document.createElement('div');
rootEle.id = "root";
document.body.appendChild(rootEle);
reactDom.render(react.createElement(CourseDetailsPage, null), rootEle);
