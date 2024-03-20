function loadBalancer(chinaDownload, USDownload) {
  return Promise
    .race([chinaDownload, USDownload])
    .then((resolved) => resolved);
}

export default loadBalancer;
