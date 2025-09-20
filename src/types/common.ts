/**
 * @file تعريفات الأنواع المشتركة بين وحدات التحليل والإنشاء المتقدمة.
 * @description تُستخدم هذه التعدادات لضمان اتساق القيم عبر النظام بأكمله.
 */

/**
 * @enum {string}
 * @description يحدد تنسيقات الأعمال الإبداعية المختلفة.
 */
export enum WorkFormat {
  FEATURE_FILM = "feature_film",
  SHORT_FILM = "short_film",
  SERIES = "series",
  LIMITED_SERIES = "limited_series",
  STAGE_PLAY = "stage_play",
  WEB_SERIES = "web_series",
  DOCUMENTARY = "documentary",
  PODCAST_SCRIPT = "podcast_script",
  NOVEL_ADAPTATION = "novel_adaptation",
  ANIMATION = "animation",
}

/**
 * @enum {string}
 * @description قائمة بالأنواع الدرامية الرئيسة المستخدمة في التحليل.
 */
export enum Genre {
  DRAMA = "drama",
  COMEDY = "comedy",
  THRILLER = "thriller",
  HORROR = "horror",
  SCI_FI = "sci_fi",
  FANTASY = "fantasy",
  ROMANCE = "romance",
  ACTION = "action",
  CRIME = "crime",
  HISTORICAL = "historical",
  FAMILY = "family",
  DOCUMENTARY = "documentary",
  MYSTERY = "mystery",
  ADVENTURE = "adventure",
  ANIMATION = "animation",
  BIOPIC = "biopic",
}

/**
 * @enum {string}
 * @description الفئات العمرية أو السوقية الرئيسية للجمهور المستهدف.
 */
export enum Audience {
  YOUNG_CHILDREN = "young_children",
  FAMILY = "family",
  TEENS = "teens",
  YOUNG_ADULTS = "young_adults",
  ADULTS = "adults",
  MATURE = "mature",
  GENERAL = "general",
  NICHE = "niche",
}

/**
 * @enum {string}
 * @description مستويات الأولوية التشغيلية للتوصيات أو الخطط.
 */
export enum Priority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  CRITICAL = "critical",
}

/**
 * @enum {string}
 * @description مراحل التطوير المختلفة للعمل السردي.
 */
export enum DevelopmentStage {
  IDEA = "idea",
  CONCEPT = "concept",
  OUTLINE = "outline",
  TREATMENT = "treatment",
  DRAFT_ONE = "draft_one",
  DRAFT_TWO = "draft_two",
  POLISHED_DRAFT = "polished_draft",
  SHOOTING_SCRIPT = "shooting_script",
  POST_PRODUCTION = "post_production",
}

/**
 * @enum {string}
 * @description الفئات التحليلية الرئيسية التي يتم تصنيف المخرجات بها.
 */
export enum Category {
  STORY_STRUCTURE = "story_structure",
  CHARACTER = "character",
  DIALOGUE = "dialogue",
  VISUAL_STYLE = "visual_style",
  THEMES = "themes",
  WORLD_BUILDING = "world_building",
  MARKET_POSITIONING = "market_positioning",
  CULTURAL_CONTEXT = "cultural_context",
  PRODUCTION = "production",
  SOUND_DESIGN = "sound_design",
  PACING = "pacing",
}

/**
 * @enum {string}
 * @description طرق تقديم المعلومات السردية داخل العمل.
 */
export enum ExpositionMethod {
  ACTION = "action",
  DIALOGUE = "dialogue",
  VISUAL_SYMBOLISM = "visual_symbolism",
  FLASHBACK = "flashback",
  MONTAGE = "montage",
  VOICE_OVER = "voice_over",
  TEXT_ON_SCREEN = "text_on_screen",
  SUBTEXT = "subtext",
  MUSIC_CUE = "music_cue",
}

/**
 * @enum {string}
 * @description أنواع العلاقات بين الشخصيات التي يُحللها النظام.
 */
export enum RelationshipType {
  ALLY = "ally",
  RIVAL = "rival",
  ROMANTIC = "romantic",
  FAMILY = "family",
  MENTOR = "mentor",
  ANTAGONIST = "antagonist",
  PROFESSIONAL = "professional",
  UNKNOWN = "unknown",
}

/**
 * @enum {string}
 * @description الأدوار السردية المتكررة للشخصيات.
 */
export enum CharacterType {
  PROTAGONIST = "protagonist",
  DEUTERAGONIST = "deuteragonist",
  ANTAGONIST = "antagonist",
  MENTOR = "mentor",
  TRICKSTER = "trickster",
  FOIL = "foil",
  SHAPESHIFTER = "shapeshifter",
  SUPPORTING = "supporting",
}

/**
 * @enum {string}
 * @description أنواع الخصم أو مصدر المعارضة الرئيسية في العمل.
 */
export enum AntagonistType {
  PERSONAL = "personal",
  SOCIETAL = "societal",
  ENVIRONMENTAL = "environmental",
  TECHNOLOGICAL = "technological",
  SUPERNATURAL = "supernatural",
  INTERNAL = "internal",
  INSTITUTIONAL = "institutional",
}

/**
 * @enum {string}
 * @description المجالات التحليلية التي تغطيها الوحدات المتقدمة.
 */
export enum AnalysisType {
  STRUCTURE = "structure",
  CHARACTER = "character",
  DIALOGUE = "dialogue",
  THEME = "theme",
  PACING = "pacing",
  VISUAL = "visual",
  AUDIENCE = "audience",
  MARKET = "market",
  CULTURAL = "cultural",
  FORESHADOWING = "foreshadowing",
  RECOMMENDATION = "recommendation",
  PRODUCTION = "production",
  VOICE = "voice",
  TENSION = "tension",
}

/**
 * @enum {string}
 * @description أنواع الصراع الرئيسة المستخدمة في التقييم الدرامي.
 */
export enum ConflictType {
  INTERNAL = "internal",
  INTERPERSONAL = "interpersonal",
  ENVIRONMENTAL = "environmental",
  SOCIAL = "social",
  TECHNOLOGICAL = "technological",
  SUPERNATURAL = "supernatural",
  IDEOLOGICAL = "ideological",
  ECONOMIC = "economic",
}

/**
 * @enum {string}
 * @description أنواع الضربات الدرامية (Story Beats) المستخدمة في تتبع البنية.
 */
export enum BeatType {
  OPENING_IMAGE = "opening_image",
  INCITING_INCIDENT = "inciting_incident",
  TURNING_POINT = "turning_point",
  MIDPOINT = "midpoint",
  PINCH_POINT = "pinch_point",
  CLIMAX = "climax",
  RESOLUTION = "resolution",
  TAG = "tag",
  REVERSAL = "reversal",
  DARK_NIGHT = "dark_night",
}
