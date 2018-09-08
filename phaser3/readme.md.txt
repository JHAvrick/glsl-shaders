```javascript

        this.customPipeline = this.sys.game.renderer.addPipeline('custom', new RGBSplitPipeline(this.sys.game));
        this.customPipeline.setFloat2('resolution', this.width, this.height);
        this.customPipeline.setFloat2('red', 10, 9);
        this.customPipeline.setFloat2('green', 13, 12);
        this.customPipeline.setFloat2('blue', 12, 10);
        this.sprite.setPipeline('custom');

```