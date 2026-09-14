/*!
 * presets.v1.js - static data: fonts, icons, shapes, decorations, design templates
 *
 * Adding things:
 *   - a font:       add an entry to FONTS (weights must exist on Google Fonts, or the whole import fails)
 *   - a shape:      add a label here and a path function in shapes.v1.js (BarShapes.PATHS)
 *   - a decoration: add an entry to DECO_TYPES and a CSS function in css.v1.js (BarCss.DECOS)
 *   - a design:     add an entry to DESIGNS; it is merged over BASE_LOOK
 */
(function () {
  "use strict";

  const SANS = '"Yu Gothic UI","Yu Gothic","Meiryo",sans-serif';
  const SERIF = '"Yu Mincho","YuMincho","Hiragino Mincho ProN",serif';

  // weights: verified against fonts.googleapis.com/css2 (2026-09-14). null = installed font, no import.
  const FONTS = {
    notosans: { label: "Noto Sans JP", family: "Noto Sans JP", weights: [400, 500, 700, 800, 900], stack: SANS },
    mplus: { label: "M PLUS 1p", family: "M PLUS 1p", weights: [400, 500, 700, 800, 900], stack: SANS },
    mplusround: { label: "M PLUS Rounded 1c（丸）", family: "M PLUS Rounded 1c", weights: [400, 500, 700, 800, 900], stack: SANS },
    zenkaku: { label: "Zen Kaku Gothic New", family: "Zen Kaku Gothic New", weights: [400, 500, 700, 900], stack: SANS },
    zenmaru: { label: "Zen Maru Gothic（丸）", family: "Zen Maru Gothic", weights: [400, 500, 700, 900], stack: SANS },
    kosugimaru: { label: "Kosugi Maru（丸）", family: "Kosugi Maru", weights: [400], stack: SANS },
    bizud: { label: "BIZ UDPゴシック", family: "BIZ UDPGothic", weights: [400, 700], stack: SANS },
    murecho: { label: "Murecho", family: "Murecho", weights: [400, 500, 700, 800, 900], stack: SANS },
    delagothic: { label: "Dela Gothic One（極太）", family: "Dela Gothic One", weights: [400], stack: SANS },
    mochiypop: { label: "Mochiy Pop One（ポップ）", family: "Mochiy Pop One", weights: [400], stack: SANS },
    dotgothic: { label: "DotGothic16（ドット）", family: "DotGothic16", weights: [400], stack: SANS },
    reggae: { label: "Reggae One", family: "Reggae One", weights: [400], stack: SANS },
    kiwimaru: { label: "Kiwi Maru", family: "Kiwi Maru", weights: [400, 500], stack: SANS },
    hachimaru: { label: "Hachi Maru Pop（手書き）", family: "Hachi Maru Pop", weights: [400], stack: SANS },
    klee: { label: "Klee One（教科書体）", family: "Klee One", weights: [400, 600], stack: SANS },
    notoserif: { label: "Noto Serif JP（明朝）", family: "Noto Serif JP", weights: [400, 500, 700, 800, 900], stack: SERIF },
    shippori: { label: "しっぽり明朝 B1", family: "Shippori Mincho B1", weights: [400, 500, 600, 700, 800], stack: SERIF },
    zenold: { label: "Zen Old Mincho（古風）", family: "Zen Old Mincho", weights: [400, 500, 600, 700, 900], stack: SERIF },
    kaisei: { label: "Kaisei Decol", family: "Kaisei Decol", weights: [400, 500, 700], stack: SERIF },
    yujisyuku: { label: "Yuji Syuku（筆）", family: "Yuji Syuku", weights: [400], stack: SERIF },
    yujiboku: { label: "Yuji Boku（筆）", family: "Yuji Boku", weights: [400], stack: SERIF },
    zenantique: { label: "Zen Antique（活版）", family: "Zen Antique", weights: [400], stack: SERIF },
    kurenaido: { label: "Zen Kurenaido", family: "Zen Kurenaido", weights: [400], stack: SANS },
    orbitron: { label: "Orbitron（英数・SF）", family: "Orbitron", weights: [400, 500, 700, 800, 900], stack: SANS },
    rajdhani: { label: "Rajdhani（英数・細身）", family: "Rajdhani", weights: [400, 500, 600, 700], stack: SANS },
    oswald: { label: "Oswald（英数・縦長）", family: "Oswald", weights: [400, 500, 600, 700], stack: SANS },
    sharetech: { label: "Share Tech Mono（英数・等幅）", family: "Share Tech Mono", weights: [400], stack: SANS },
    chakra: { label: "Chakra Petch（英数・角）", family: "Chakra Petch", weights: [400, 500, 600, 700], stack: SANS },
    teko: { label: "Teko（英数・縦長）", family: "Teko", weights: [400, 500, 600, 700], stack: SANS },
    bebas: { label: "Bebas Neue（英数・見出し）", family: "Bebas Neue", weights: [400], stack: SANS },
    russo: { label: "Russo One（英数・太）", family: "Russo One", weights: [400], stack: SANS },
    pressstart: { label: "Press Start 2P（英数・ドット）", family: "Press Start 2P", weights: [400], stack: SANS },
    silkscreen: { label: "Silkscreen（英数・ドット）", family: "Silkscreen", weights: [400, 700], stack: SANS },
    vt323: { label: "VT323（英数・端末）", family: "VT323", weights: [400], stack: SANS },
    cinzel: { label: "Cinzel（英数・碑文）", family: "Cinzel", weights: [400, 500, 600, 700, 800, 900], stack: SERIF },
    cormorant: { label: "Cormorant Garamond（英数・古典）", family: "Cormorant Garamond", weights: [400, 500, 600, 700], stack: SERIF },
    barlowcond: { label: "Barlow Condensed（英数・細身）", family: "Barlow Condensed", weights: [400, 500, 600, 700, 800, 900], stack: SANS },
    yugothic: { label: "游ゴシック（PCのフォント）", family: "Yu Gothic UI", weights: null, stack: SANS },
    meiryo: { label: "メイリオ（PCのフォント）", family: "Meiryo", weights: null, stack: SANS },
    yumincho: { label: "游明朝（PCのフォント）", family: "Yu Mincho", weights: null, stack: SERIF },
  };

  const WEIGHTS = [[400, "標準"], [500, "やや太"], [600, "中太"], [700, "太"], [800, "極太"], [900, "最太"]];

  const ICONS = [
    ["none", "なし"], ["heart", "ハート"], ["drop", "しずく"], ["star", "星"], ["sparkle", "きらめき"],
    ["eye", "目"], ["moon", "月"], ["bolt", "稲妻"], ["shield", "盾"], ["cross", "十字"],
    ["clover", "クローバー"], ["skull", "どくろ"], ["flame", "炎"], ["dot", "丸"],
  ];

  const SHAPES = [
    ["rect", "四角（角丸）"], ["pill", "カプセル"], ["slant", "平行四辺形"],
    ["chamfer", "面取り"], ["arrow", "矢印"], ["tag", "片側カット"],
  ];

  const FILLS = [
    ["flat", "単色"], ["vgrad", "グラデーション（縦）"], ["hgrad", "グラデーション（横）"],
    ["gloss", "つや（上下2段）"], ["stripes", "斜線"], ["neon", "ネオン（中心が明るい）"],
  ];

  const TRACKS = [["dark", "暗い下地"], ["tint", "下地にバーの色を混ぜる"], ["none", "なし（透明）"]];

  const TEXT_LAYOUTS = [
    ["overlay", "バーに重ねる"], ["above", "バーの上に出す"], ["below", "バーの下に出す"],
    ["side", "横に並べる（ラベル｜バー｜数値）"], ["labelSide", "ラベルだけ外（ラベル｜バーの中に数値）"],
  ];

  const ALIGNS = [["split", "ラベルは左・数値は右"], ["valueCenter", "ラベルは左・数値は中央"], ["center", "数値だけ中央"]];

  const VALUE_MODES = [["both", "現在値 / 最大値"], ["current", "現在値だけ"], ["none", "出さない"]];

  const OUTLINES = [["shadow", "ぼかした影"], ["stroke", "ふちどり"], ["glow", "光る"], ["none", "なし"]];

  const NAME_POS = [
    ["top", "いちばん上"], ["barsTop", "バーの上（アイコンの横）"], ["bottom", "いちばん下"],
    ["left", "左"], ["avatar", "アイコンに重ねる"], ["none", "出さない"],
  ];

  const NAME_STYLES = [
    ["plate", "板（バーと同じ枠）"], ["text", "文字だけ"], ["underline", "下線"],
    ["sidebar", "左に色の線"], ["tab", "見出しタブ"], ["badge", "丸いラベル"],
  ];

  // controls: [key, label, type, min, max, step, fmt]  type: range | color | check | select(options in min)
  const DECO_TYPES = {
    panel: {
      label: "背景パネル", desc: "全体の後ろに板を敷きます。明るい配信画面でも読みやすくなります。",
      defaults: { on: false, color: "#0e1016", alpha: 0.85, radius: 10, borderW: 1, borderColor: "#ffffff", borderAlpha: 0.12, pad: 10, accentLine: false, texture: "none" },
      controls: [
        ["color", "色", "color"], ["alpha", "不透明度", "range", 0, 1, 0.01, "pct"],
        ["radius", "角丸", "range", 0, 40, 1], ["pad", "内側の余白", "range", 0, 40, 1],
        ["borderW", "枠線の太さ", "range", 0, 6, 1], ["borderColor", "枠線の色", "color"], ["borderAlpha", "枠線の濃さ", "range", 0, 1, 0.01, "pct"],
        ["accentLine", "左にキャラ色の線", "check"],
        ["texture", "質感", "select", [["none", "なし"], ["paper", "古い紙"], ["grain", "ざらつき"]]],
      ],
    },
    gloss: {
      label: "光沢", desc: "バーの上半分に光を乗せます。",
      defaults: { on: false, alpha: 0.3 },
      controls: [["alpha", "強さ", "range", 0.05, 1, 0.05, "pct"]],
    },
    glow: {
      label: "外側の光", desc: "バーのまわりを、それぞれの色で光らせます。",
      defaults: { on: false, size: 6, alpha: 0.6 },
      controls: [["size", "広がり", "range", 1, 20, 1], ["alpha", "強さ", "range", 0.05, 1, 0.05, "pct"]],
    },
    tip: {
      label: "先端の光", desc: "減った位置（バーの先端）に明るい線を出します。",
      defaults: { on: false, alpha: 0.85 },
      controls: [["alpha", "強さ", "range", 0.1, 1, 0.05, "pct"]],
    },
    sheen: {
      label: "流れる光", desc: "光の筋がときどきバーの上を横切ります。",
      defaults: { on: false, alpha: 0.35, duration: 4 },
      controls: [["alpha", "強さ", "range", 0.05, 1, 0.05, "pct"], ["duration", "間隔（秒）", "range", 1, 12, 0.5]],
    },
    scanlines: {
      label: "走査線", desc: "横じまを重ねてモニター風にします。",
      defaults: { on: false, alpha: 0.25, gap: 3 },
      controls: [["alpha", "濃さ", "range", 0.05, 1, 0.05, "pct"], ["gap", "間隔", "range", 2, 8, 1]],
    },
    ticks: {
      label: "目盛り", desc: "バーの下側に等間隔の目盛りを入れます。",
      defaults: { on: false, div: 10, alpha: 0.5, color: "#ffffff" },
      controls: [["div", "分割数", "range", 2, 20, 1], ["color", "色", "color"], ["alpha", "濃さ", "range", 0.05, 1, 0.05, "pct"]],
    },
    grain: {
      label: "ざらつき", desc: "バーに細かいノイズを乗せて、古びた質感にします。",
      defaults: { on: false, alpha: 0.3 },
      controls: [["alpha", "濃さ", "range", 0.05, 1, 0.05, "pct"]],
    },
    brackets: {
      label: "角のかっこ", desc: "1本ずつ、四隅に HUD 風のかっこを付けます。",
      defaults: { on: false, color: "#6ff3ff", alpha: 0.9, len: 8, width: 2, offset: 4 },
      controls: [
        ["color", "色", "color"], ["alpha", "濃さ", "range", 0.05, 1, 0.05, "pct"],
        ["len", "長さ", "range", 3, 24, 1], ["width", "太さ", "range", 1, 4, 1], ["offset", "バーとの間", "range", 0, 12, 1],
      ],
    },
  };

  const BAR_COLORS = [
    ["#e0563f", "#a51f22", "heart"], ["#4fa3e3", "#1f4f9c", "sparkle"], ["#b487e8", "#5f3a9c", "eye"],
    ["#e8c65a", "#a07c1f", "clover"], ["#5fcf8a", "#23804a", "bolt"], ["#f08fb4", "#a8406a", "shield"],
    ["#7fd6d6", "#2a8080", "moon"], ["#c9c9c9", "#6b6b6b", "dot"],
  ];

  // The look of the default design ("標準"). Other designs are patches over this.
  const BASE_LOOK = {
    layout: { direction: "column", columns: 2, width: 320, height: 34, gap: 6, textLayout: "overlay", align: "split",
      labelW: 52, valueW: 86, textGap: 4, pad: 10, outer: 10 },
    avatar: { show: false, pos: "left", w: 88, h: 88, radius: 6, borderW: 1, borderColor: "#ffffff", borderAlpha: 0.6,
      useCharColor: false, fit: "top", gap: 8, bg: "#000000", bgAlpha: 0.5 },
    initiative: { show: false, size: 24, color: "#1b1b1f", bg: "#f2efe6", corner: "tr" },
    bar: { shape: "rect", radius: 6, cut: 10, slant: 12, borderW: 1, borderColor: "#ffffff", borderAlpha: 0.28, double: false,
      track: "dark", trackColor: "#080a0e", trackAlpha: 0.78, tint: 0.25,
      fill: "vgrad", flow: false, segments: 0, segGap: 2, speed: 0.25, shadow: 0.45 },
    colors: BAR_COLORS.map(([c1, c2, icon]) => ({ c1, c2, icon })),
    icons: { show: false, size: 20, gap: 6 },
    text: { labelFont: "notosans", valueFont: "notosans", weight: 700, labelSize: 17, valueSize: 18, maxSize: 12, spacing: 0.04,
      color: "#f2efe6", subColor: "#f2efe6", subAlpha: 0.7, labelByBar: false,
      outline: "shadow", outlineColor: "#000000", outlineAlpha: 0.9, outlineW: 2, showLabel: true, valueMode: "both" },
    name: { pos: "top", style: "plate", font: "notosans", weight: 700, size: 17, color: "#f2efe6", bg: "#080a0e", bgAlpha: 0.88,
      accent: "#c8a45c", useCharColor: false, align: "left", vertical: false, overflow: "ellipsis", gap: 6 },
    alert: { red80: true, redColor: "#ff5b5b", redBlink: false,
      lowOn: true, lowAt: 25, lowColor: "#ff3b3b", lowFill: false, lowPulse: true, lowBlink: false, lowShake: false, lowText: true,
      zeroOn: true, zeroGray: true, zeroBlink: false },
    decos: Object.fromEntries(Object.entries(DECO_TYPES).map(([k, t]) => [k, Object.assign({}, t.defaults)])),
  };

  const on = (fields) => Object.assign({ on: true }, fields);
  const colors = list => list.map(([c1, c2, icon]) => ({ c1, c2, icon }));

  const DESIGNS = {
    standard: {
      label: "標準（黒地＋赤青紫）", desc: "黒い下地に赤・青・紫。どの卓にも合わせやすい基本形です。",
    },
    minimal: {
      label: "ミニマル", desc: "細い線のバーの上に数字。画面の邪魔をしない控えめな形です。",
      layout: { width: 260, height: 7, gap: 10, textLayout: "above", textGap: 3 },
      bar: { shape: "pill", borderW: 0, track: "tint", trackColor: "#ffffff", trackAlpha: 0.18, tint: 0.3, fill: "flat", shadow: 0 },
      text: { labelFont: "zenkaku", valueFont: "zenkaku", weight: 500, labelSize: 13, valueSize: 17, maxSize: 11, subAlpha: 0.6, outline: "shadow", outlineAlpha: 0.7 },
      name: { style: "text", font: "zenkaku", weight: 700, size: 18, gap: 8 },
      alert: { lowPulse: false, lowText: true },
    },
    hud: {
      label: "SF・HUD", desc: "斜めのバーを区切りで刻み、走査線と角のかっこ。SFや現代アクションに。",
      layout: { width: 330, height: 20, gap: 12, textLayout: "side", labelW: 44, valueW: 80, textGap: 8 },
      bar: { shape: "slant", slant: 9, borderW: 1, borderColor: "#6ff3ff", borderAlpha: 0.7, track: "dark", trackColor: "#031018", trackAlpha: 0.8,
        fill: "vgrad", segments: 16, segGap: 2, shadow: 0 },
      colors: colors([["#ff5a78", "#b3123a", "heart"], ["#3fdcff", "#0a6c9c", "bolt"], ["#c792ff", "#6a2bd1", "eye"], ["#ffd84a", "#a88400", "star"],
        ["#63ffa8", "#0f8f4d", "shield"], ["#ff9f43", "#b35a00", "flame"], ["#8af0ff", "#2a8a9c", "moon"], ["#d0d8e0", "#6b7580", "dot"]]),
      text: { labelFont: "orbitron", valueFont: "rajdhani", weight: 700, labelSize: 14, valueSize: 22, maxSize: 14, spacing: 0.08,
        color: "#dffbff", subColor: "#8fd9e8", subAlpha: 0.9, outline: "glow", outlineColor: "#00c8ff", outlineAlpha: 0.55 },
      name: { style: "sidebar", font: "chakra", weight: 700, size: 17, color: "#dffbff", bg: "#031018", bgAlpha: 0.75, accent: "#6ff3ff", gap: 10 },
      alert: { lowColor: "#ff2a4a", lowPulse: true, lowBlink: true, redColor: "#ff6b81" },
      decos: { scanlines: on({ alpha: 0.3, gap: 3 }), brackets: on({ color: "#6ff3ff", alpha: 0.85, len: 7, width: 2, offset: 4 }), tip: on({ alpha: 0.9 }) },
    },
    archive: {
      label: "古文書（クトゥルフ）", desc: "黄ばんだ紙に墨の文字。明朝体と面取りのバーで、探索記録の雰囲気に。",
      layout: { width: 300, height: 14, gap: 9, textLayout: "side", labelW: 48, valueW: 78, textGap: 8 },
      bar: { shape: "chamfer", cut: 4, borderW: 1, borderColor: "#3b2a18", borderAlpha: 0.85, track: "dark", trackColor: "#3b2a18", trackAlpha: 0.15,
        fill: "flat", shadow: 0 },
      colors: colors([["#9c2a22", "#6d1a14", "heart"], ["#2e4a6e", "#1c2f48", "star"], ["#5a3f73", "#2f2240", "eye"], ["#8a6a2a", "#5c4518", "clover"],
        ["#3f6a3a", "#233d20", "bolt"], ["#7a3a52", "#4a1f30", "shield"], ["#3a6a6a", "#1f3d3d", "moon"], ["#5a5048", "#332d28", "dot"]]),
      text: { labelFont: "shippori", valueFont: "shippori", weight: 700, labelSize: 16, valueSize: 19, maxSize: 13, spacing: 0.02,
        color: "#2b2118", subColor: "#2b2118", subAlpha: 0.65, outline: "none" },
      name: { style: "underline", font: "shippori", weight: 800, size: 21, color: "#2b2118", accent: "#7a1f1a", gap: 8 },
      alert: { redColor: "#8a1a1a", lowColor: "#7a0f0f", lowPulse: false, lowBlink: true, lowText: true },
      decos: { panel: on({ color: "#e6d8b8", alpha: 0.96, radius: 2, borderW: 1, borderColor: "#5a4326", borderAlpha: 0.8, pad: 14, texture: "paper" }),
        grain: on({ alpha: 0.35 }) },
    },
    wafu: {
      label: "和風", desc: "墨色の板に金の二重線。朱・藍・紫のバーと縦書きの名前で、和ものの卓に。",
      layout: { width: 250, height: 24, gap: 7, textLayout: "overlay", pad: 9 },
      bar: { shape: "rect", radius: 0, borderW: 1, borderColor: "#c9a64a", borderAlpha: 0.95, double: true, track: "dark", trackColor: "#0a0807", trackAlpha: 0.7,
        fill: "vgrad", shadow: 0 },
      colors: colors([["#d0452f", "#8e2416", "flame"], ["#3d5f9e", "#1f3563", "drop"], ["#8a5aa8", "#4d2d66", "moon"], ["#c9a64a", "#7a6020", "clover"],
        ["#4f8a5a", "#28502f", "bolt"], ["#c25b7c", "#7a3048", "sparkle"], ["#5a9a9a", "#2f5a5a", "eye"], ["#9a9086", "#5a524a", "dot"]]),
      text: { labelFont: "zenold", valueFont: "zenold", weight: 700, labelSize: 15, valueSize: 18, maxSize: 12, color: "#f1e6cc", subColor: "#f1e6cc" },
      name: { pos: "left", style: "text", vertical: true, font: "zenold", weight: 900, size: 22, color: "#f1e6cc", gap: 12 },
      alert: { lowColor: "#ff4a2a", redColor: "#ff7a5a" },
      decos: { panel: on({ color: "#14110f", alpha: 0.86, radius: 0, borderW: 1, borderColor: "#c9a64a", borderAlpha: 0.7, pad: 12 }) },
    },
    pop: {
      label: "ポップ", desc: "白ふちのカプセルに流れる斜線。丸ゴシックでにぎやかに。",
      layout: { width: 290, height: 28, gap: 8, textLayout: "overlay", pad: 12 },
      bar: { shape: "pill", borderW: 3, borderColor: "#ffffff", borderAlpha: 1, track: "tint", trackColor: "#ffffff", trackAlpha: 0.75, tint: 0.22,
        fill: "stripes", flow: true, shadow: 0.3 },
      colors: colors([["#ff8a9a", "#ff6680", "heart"], ["#7cd0ff", "#4db4f7", "star"], ["#c3a6ff", "#a07ef7", "sparkle"], ["#ffd66b", "#ffbf2e", "clover"],
        ["#7fe0a8", "#4fcc85", "bolt"], ["#ffab7a", "#ff8a4d", "flame"], ["#8ee6e0", "#55cfc6", "drop"], ["#d6d6e0", "#b3b3c2", "dot"]]),
      icons: { show: true, size: 24, gap: 6 },
      text: { labelFont: "mplusround", valueFont: "mplusround", weight: 800, labelSize: 15, valueSize: 18, maxSize: 12, spacing: 0.02,
        color: "#ffffff", subColor: "#ffffff", subAlpha: 0.9, outline: "stroke", outlineColor: "#4a3a66", outlineAlpha: 1, outlineW: 2 },
      name: { style: "badge", font: "mplusround", weight: 800, size: 17, color: "#ffffff", useCharColor: true, accent: "#ff7fa0", gap: 8 },
      alert: { lowPulse: false, lowShake: true, lowText: false, red80: false },
      decos: { gloss: on({ alpha: 0.35 }) },
    },
    horror: {
      label: "ホラー", desc: "黒ずんだ赤、筆文字、ざらつき。ピンチになると震えます。",
      layout: { width: 300, height: 24, gap: 8, textLayout: "overlay", pad: 12 },
      bar: { shape: "tag", cut: 8, borderW: 1, borderColor: "#6a0f0f", borderAlpha: 0.9, track: "dark", trackColor: "#0a0506", trackAlpha: 0.85,
        fill: "vgrad", shadow: 0.6 },
      colors: colors([["#b3141b", "#5c0509", "heart"], ["#3b4a6b", "#1b2233", "drop"], ["#6a2d80", "#2a1033", "eye"], ["#8a7a3a", "#3d3410", "clover"],
        ["#3a6a3a", "#152a15", "bolt"], ["#7a2a4a", "#33101f", "skull"], ["#2a5a5a", "#0f2626", "moon"], ["#5a5050", "#262020", "dot"]]),
      text: { labelFont: "zenantique", valueFont: "zenantique", weight: 400, labelSize: 16, valueSize: 19, maxSize: 13,
        color: "#eadad6", subColor: "#c9b3ad", subAlpha: 0.85, outline: "glow", outlineColor: "#4a0000", outlineAlpha: 1 },
      name: { style: "text", font: "yujiboku", weight: 400, size: 23, color: "#e0cbc5", gap: 6 },
      alert: { lowColor: "#ff1e1e", lowPulse: true, lowShake: true, redColor: "#ff4a4a" },
      decos: { grain: on({ alpha: 0.4 }), glow: on({ size: 7, alpha: 0.45 }) },
    },
    retro: {
      label: "レトロゲーム", desc: "ドット文字と区切りのバー。昔の RPG のステータス画面風。",
      layout: { width: 300, height: 14, gap: 8, textLayout: "side", labelW: 42, valueW: 92, textGap: 8 },
      bar: { shape: "rect", radius: 0, borderW: 2, borderColor: "#ffffff", borderAlpha: 1, track: "dark", trackColor: "#000000", trackAlpha: 1,
        fill: "flat", segments: 12, segGap: 2, speed: 0.15, shadow: 0 },
      colors: colors([["#3ddc5a", "#1f8f36", "heart"], ["#3da5ff", "#1f5fa8", "star"], ["#ffcc33", "#a88400", "eye"], ["#ff8c3d", "#a84f10", "clover"],
        ["#e05ae0", "#8a2a8a", "bolt"], ["#5ae0e0", "#2a8a8a", "shield"], ["#f0f0f0", "#9a9a9a", "moon"], ["#a0a0a0", "#5a5a5a", "dot"]]),
      text: { labelFont: "dotgothic", valueFont: "dotgothic", weight: 400, labelSize: 16, valueSize: 18, maxSize: 14, spacing: 0.04,
        color: "#ffffff", subColor: "#ffffff", subAlpha: 0.75, outline: "none" },
      name: { style: "text", font: "dotgothic", weight: 400, size: 18, color: "#ffffff", gap: 8 },
      alert: { lowFill: true, lowColor: "#ff3030", lowPulse: false, lowBlink: true, lowText: true, redColor: "#ffd23a" },
      decos: { panel: on({ color: "#000000", alpha: 0.88, radius: 0, borderW: 2, borderColor: "#ffffff", borderAlpha: 1, pad: 12 }) },
    },
    card: {
      label: "カード（アイコン付き）", desc: "キャラのアイコンと名前、バーを1枚のカードに。イニシアチブも表示します。",
      layout: { width: 220, height: 22, gap: 5, textLayout: "overlay", pad: 8 },
      avatar: { show: true, pos: "left", w: 92, h: 92, radius: 8, borderW: 2, useCharColor: true, fit: "top", gap: 10 },
      initiative: { show: true, size: 24, corner: "tl" },
      bar: { radius: 5 },
      text: { labelSize: 14, valueSize: 16, maxSize: 11 },
      name: { pos: "barsTop", style: "text", size: 17, gap: 6 },
      decos: { panel: on({ color: "#0e1016", alpha: 0.86, radius: 12, borderW: 1, borderColor: "#ffffff", borderAlpha: 0.12, pad: 10, accentLine: true }),
        gloss: on({ alpha: 0.22 }) },
    },
  };

  const SAMPLE_STATUS = [["HP", 10, 12], ["MP", 11, 14], ["SAN", 52, 65], ["幸運", 60, 99], ["耐久", 5, 10], ["気力", 3, 8], ["信仰", 40, 50], ["お金", 120, 300]];

  const CHAR_COLORS = ["#e0563f", "#4fa3e3", "#8fd16a", "#e8c65a", "#b487e8", "#f08fb4", "#5fcfcf", "#f0a05a"];

  window.BarPresets = {
    FONTS, WEIGHTS, ICONS, SHAPES, FILLS, TRACKS, TEXT_LAYOUTS, ALIGNS, VALUE_MODES, OUTLINES,
    NAME_POS, NAME_STYLES, DECO_TYPES, BASE_LOOK, DESIGNS, SAMPLE_STATUS, CHAR_COLORS,
  };
})();
