const path = require('path')
module.exports = {
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/containers/helpers/FontWrapper/FontWrapper')
    },
    sections: [
        { name: 'Components', components: './src/components/**/[A-Z]*.tsx', sectionDepth: 1 }
    ]
}
