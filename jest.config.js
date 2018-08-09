module.exports = {
    "verbose": true,
    "testURL": "http://localhost/",
    "setupTestFrameworkScriptFile": "<rootDir>/__tests__/setup/setupEnzyme.ts",
    "testPathIgnorePatterns": [
        "<rootDir>/__tests__/setup/",
        "<rootDir>/__tests__/stories/",
        "/node_modules/",
        "<rootDir>/.cache/"
    ],
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ],
    "transform": {
        "^.+\\.(jsx?|tsx?)$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "^.+\\.(css|less)$": "identity-obj-proxy"
    },
    "collectCoverage": true,
    "collectCoverageFrom": [
        "src/**/*.(jsx?|tsx?)"
    ],
    "coverageReporters": [
        "lcov",
        "text",
        "html"
    ]
};