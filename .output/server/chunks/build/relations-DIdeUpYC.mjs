function safeRelation(idOrObject) {
  if (!idOrObject)
    return void 0;
  if (typeof idOrObject === "string") {
    return {
      id: idOrObject
    };
  }
  if (idOrObject.id) {
    return idOrObject.id;
  }
  return null;
}
function safeRelationId(idOrObject) {
  if (!idOrObject)
    return null;
  if (typeof idOrObject === "string") {
    return idOrObject;
  }
  if (idOrObject.id) {
    return idOrObject.id;
  }
  return null;
}

export { safeRelation as a, safeRelationId as s };
//# sourceMappingURL=relations-DIdeUpYC.mjs.map
