import { u as useToast } from './useToast-BMHYguAT.mjs';
import { w as useRuntimeConfig, c as createError } from './server.mjs';
import { ref } from 'vue';
import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = (stripePublishableKey) => {
  if (!stripePromise) {
    stripePromise = loadStripe(stripePublishableKey);
  }
  return stripePromise;
};
function useStripe() {
  const toast = useToast();
  const runtimeConfig = useRuntimeConfig();
  const { stripePublishableKey } = runtimeConfig.public;
  const loading = ref(false);
  const handleCheckout = async (invoiceId) => {
    var _a;
    loading.value = true;
    try {
      const session = await $fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        body: {
          invoiceId
        }
      });
      const stripe = await getStripe(stripePublishableKey);
      if (!stripe) {
        throw createError("Problem loading payment processor");
      }
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id
      });
    } catch (error) {
      toast.add({
        id: "stripe-checkout-error",
        title: "Oops! Something went wrong.",
        description: (_a = error.data.message) != null ? _a : "An unexpected error occurred.",
        color: "red",
        icon: "material-symbols:warning-outline-rounded"
      });
    } finally {
      loading.value = false;
    }
  };
  async function getPortalLink(customerId) {
    var _a;
    loading.value = true;
    try {
      const portalSession = await $fetch("/api/stripe/create-portal-link", {
        method: "POST",
        body: {
          customerId
        }
      });
      (void 0).location.href = portalSession.url;
    } catch (error) {
      toast.add({
        id: "stripe-portal-error",
        title: "Oops! Something went wrong.",
        description: (_a = error.data.message) != null ? _a : "An unexpected error occurred.",
        color: "red",
        icon: "material-symbols:warning-outline-rounded"
      });
    }
  }
  return {
    loading,
    handleCheckout,
    getPortalLink
  };
}

export { useStripe as u };
//# sourceMappingURL=useStripe-M4UNwPVt.mjs.map
