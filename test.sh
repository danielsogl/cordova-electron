cd test
rm -rf platforms
cat package.json.default > package.json
cordova platform add ../
# TODO verify that the platform was added successfully
