/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"confirmEmail":{"verb":"GET","url":"/email/confirm","args":["token"]},"logout":{"verb":"GET","url":"/api/v1/account/logout","args":[]},"updatePassword":{"verb":"PUT","url":"/api/v1/account/update-password","args":["password"]},"updateProfile":{"verb":"PUT","url":"/api/v1/account/update-profile","args":["fullName","emailAddress"]},"updateBillingCard":{"verb":"PUT","url":"/api/v1/account/update-billing-card","args":["stripeToken","billingCardLast4","billingCardBrand","billingCardExpMonth","billingCardExpYear"]},"login":{"verb":"PUT","url":"/api/v1/entrance/login","args":["emailAddress","password","rememberMe"]},"signup":{"verb":"POST","url":"/api/v1/entrance/signup","args":["emailAddress","password","fullName"]},"sendPasswordRecoveryEmail":{"verb":"POST","url":"/api/v1/entrance/send-password-recovery-email","args":["emailAddress"]},"updatePasswordAndLogin":{"verb":"POST","url":"/api/v1/entrance/update-password-and-login","args":["password","token"]},"deliverContactFormMessage":{"verb":"POST","url":"/api/v1/deliver-contact-form-message","args":["emailAddress","topic","fullName","message"]},"eventEnter":{"verb":"PUT","url":"/api/v1/entrance/event","args":["eventCode"]},"createEvent":{"verb":"POST","url":"/api/v1/account/create-event","args":["eventCode","start","end"]},"viewEvent":{"verb":"POST","url":"/api/v1/entrance/view-event","args":["questionText"]}, "postLike":{"verb":"POST","url":"/api/v1/entrance/post-like","args":["questionId", "ipAddress"]}, "postDislike":{"verb":"POST","url":"/api/v1/entrance/post-dislike","args":["questionId", "ipAddress"]}, "view-events":{"verb":"GET","url":"/api/v1/account/view-events-api", "args": []}, "deleteQuestion":{"verb":"POST","url":"/api/v1/account/delete-question","args":["questionId"]}, "editQuestion":{"verb":"POST","url":"/api/v1/account/edit-question","args":["questionId", "text"]}, "highlightQuestion":{"verb":"POST","url":"/api/v1/account/highlight-question","args":["questionId"]}, "unhighlightQuestion":{"verb":"POST","url":"/api/v1/account/unhighlight-question","args":["questionId"]}}
  /* eslint-enable */

});
