(firstName = {
  A: "Alpha",
  B: "Beta",
  C: "Cache",
  D: "Data",
  E: "Energy",
  F: "Function",
  G: "Glitch",
  H: "Half-life",
  I: "Ice",
  J: "Java",
  K: "Keystroke",
  L: "Logic",
  M: "Malware",
  N: "Nagware",
  O: "OS",
  P: "Phishing",
  Q: "Quantum",
  R: "RAD",
  S: "Strike",
  T: "Trojan",
  U: "Ultraviolet",
  V: "Vanilla",
  W: "WiFi",
  X: "Xerox",
  Y: "Y",
  Z: "Zero"
}),
  (surName = {
    A: "Alpha",
    B: "Beta",
    C: "Cache",
    D: "Data",
    E: "Energy",
    F: "Function",
    G: "Glitch",
    H: "Half-life",
    I: "Ice",
    J: "Java",
    K: "Keystroke",
    L: "Logic",
    M: "Malware",
    N: "Nagware",
    O: "OS",
    P: "Phishing",
    Q: "Quantum",
    R: "RAD",
    S: "Strike",
    T: "Trojan",
    U: "Ultraviolet",
    V: "Vanilla",
    W: "WiFi",
    X: "Xerox",
    Y: "Y",
    Z: "Zero"
  });

function crashOverride(first, last) {
  if (!isNaN(first[0]) || !isNaN(last[0])) {
    return "Your name must start with a letter from A - Z.";
  } else {
    let nameInitial = first[0].toUpperCase();
    let surnameInitial = last[0].toUpperCase();
    return `${firstName[nameInitial]} ${surName[surnameInitial]}`;
  }
}

module.exports = crashOverride;
