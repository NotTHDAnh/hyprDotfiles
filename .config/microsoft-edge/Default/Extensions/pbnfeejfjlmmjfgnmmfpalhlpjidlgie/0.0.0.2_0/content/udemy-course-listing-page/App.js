import { S as StorageKeys } from '../../chunks/storage-keys-0974cdc0.js';

const isTest = false;
const couponAvailableBadgeClassName = 'fresh-coupons--coupon-available-badge';
setInterval(mountCouponBadgeAsync, 3000);
async function mountCouponBadgeAsync() {
    const selector = 'a[href^="/course/"]';
    const courseElements = Array.from(document.querySelectorAll(selector));
    if (!courseElements.length)
        return;
    chrome.storage.local.get([StorageKeys.Courses], result => {
        const courses = result[StorageKeys.Courses];
        courseElements.forEach(courseContainerEle => {
            var _a;
            const course = courses.coursesWithCoupon[courseContainerEle.href] || courses.freeCourses[courseContainerEle.href];
            if (!course && !isTest)
                return;
            if (courseContainerEle.querySelector(`.${couponAvailableBadgeClassName}`))
                return;
            courseContainerEle.style.position = 'relative';
            const imageContainerEle = courseContainerEle.querySelector('[class^="course-card--image-wrapper"]');
            if (!imageContainerEle)
                return;
            imageContainerEle.appendChild(getCouponAvailableBadgeElement((_a = course.couponData) === null || _a === void 0 ? void 0 : _a.discountPercentage, course.isAlreadyAFreeCourse));
        });
        function getCouponAvailableBadgeElement(discountPercentage, isAlreadyAFreeCourse = false) {
            const couponAvailableBadge = document.createElement('div');
            couponAvailableBadge.classList.add(couponAvailableBadgeClassName);
            couponAvailableBadge.style.backgroundColor = "orange";
            couponAvailableBadge.style.color = "white";
            couponAvailableBadge.style.fontWeight = "bold";
            couponAvailableBadge.style.position = "absolute";
            couponAvailableBadge.style.bottom = "0";
            couponAvailableBadge.style.left = "0";
            couponAvailableBadge.style.padding = "5px 10px";
            couponAvailableBadge.innerText = isAlreadyAFreeCourse ? 'FREE' : `Coupon available (${discountPercentage}% OFF)`;
            return couponAvailableBadge;
        }
    });
}
