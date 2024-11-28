/*
 * This file includes code derived from the Legcord project
 * (https://github.com/Legcord/Legcord), originally created by the Legcord team.
 * Licensed under the Open Software License v3.0 (OSLv3).
 */

const {
    plugin: {store},
    ui: {TextBox, Header, HeaderTags}
} = shelter;


function isValidAspectRatio(str) {
    let aspectRatioPattern = /^\d+\s*\/\s*\d+$/;
    return aspectRatioPattern.test(str);
}

export default () => (
    <>
        <Header tag={HeaderTags.H1}>Resolution</Header>
        <TextBox
            placeholder="720/1080/1440"
            value={Number.isSafeInteger(store.resolution) ? store.resolution : ""}
            onInput={(v) => {
                store.resolution = parseInt(v);
            }}
        />
        <Header tag={HeaderTags.H1}>Aspect Ratio</Header>
        <TextBox
            placeholder="'16 / 9', '21 / 9'"
            value={isValidAspectRatio(store.aspectRatio) ? store.aspectRatio : ""}
            onInput={(v) => {
                store.aspectRatio = v;
            }}
        />
        <Header tag={HeaderTags.H1}>FPS</Header>
        <TextBox
            placeholder="15/30/60"
            value={Number.isSafeInteger(store.fps) ? store.fps : ""}
            onInput={(v) => {
                store.fps = parseInt(v);
            }}
        />
    </>
);
