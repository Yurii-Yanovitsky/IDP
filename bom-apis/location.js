function createPropertyElement(name, value, container) {
  const propertyElement = document.createElement("p");
  propertyElement.innerHTML = `<p><strong>${name}:</strong> ${value}</p>`;
  container.append(propertyElement);
}

function showLocationInfo() {
  const locationContainer = document.createElement("div");
  const headerElement = document.createElement("h3");
  headerElement.textContent = "Document Location Info:";

  locationContainer.append(headerElement);

  createPropertyElement("URL", location.href, locationContainer);
  createPropertyElement("protocol", location.protocol, locationContainer);
  createPropertyElement("pathname", location.pathname, locationContainer);
  createPropertyElement("host", location.host, locationContainer);
  createPropertyElement("hostname", location.hostname, locationContainer);
  createPropertyElement("origin", location.origin, locationContainer);

  document.body.append(locationContainer);
}

showLocationInfo();
