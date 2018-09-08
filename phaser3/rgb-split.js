import Phaser from 'phaser';

var RGBSplitPipeline = new Phaser.Class({

    Extends: Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline,

    initialize: function (game) {
        Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline.call(this, {
            game: game,
            renderer: game.renderer,
            fragShader:`
                precision mediump float;
                varying vec2 outTexCoord;
                varying vec4 vColor;
                uniform vec2 red;
                uniform vec2 green;
                uniform vec2 blue;
                uniform vec2 resolution;
                uniform sampler2D uSampler;

                void main(void) {
                    gl_FragColor.r = texture2D(uSampler, outTexCoord + red/resolution.xy).r;
                    gl_FragColor.g = texture2D(uSampler, outTexCoord + green/resolution.xy).g;
                    gl_FragColor.b = texture2D(uSampler, outTexCoord + blue/resolution.xy).b;
                    gl_FragColor.a = texture2D(uSampler, outTexCoord).a;
                }`
        });
    } 

});

/*
this.customPipeline = this.sys.game.renderer.addPipeline('custom', new RGBSplitPipeline(this.sys.game));
this.customPipeline.setFloat2('resolution', this.width, this.height);
this.customPipeline.setFloat2('red', 10, 9);
this.customPipeline.setFloat2('green', 13, 12);
this.customPipeline.setFloat2('blue', 12, 10);
this.sprite.setPipeline('custom');
*/

export default RGBSplitPipeline;