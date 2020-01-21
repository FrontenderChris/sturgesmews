<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_sturgesmews' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'MC2.mysql' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'OT!U9i5A}X)bW{EsCsxGPnw7w;gcX$UvAEZ1v@IKVQrcm]30ml$w/]3ax[0$@byG' );
define( 'SECURE_AUTH_KEY',  'd|L_EV7:yB(g;Ab@aL{k`G4I~N<Z;Q3KQ_+#)odFbV.JKNV^,~]q{Hn%=CKm)?H+' );
define( 'LOGGED_IN_KEY',    'fk^nw.|G~U?=7l:hIp;$@`Z:4@X!K)sDaF=B|g|iV]j_O<mu(#eOd;2vT=7ZF;2:' );
define( 'NONCE_KEY',        'py;f|Xn x%wViGdgikI$DJR)N`d=(.3$Ak5a%Pv/ET8~7u{^^C0=hNy>r7P~:/4^' );
define( 'AUTH_SALT',        'y_7G9Y,g~-aOv3xQB8Ub}X!0?sFVY)/;b7*,.u57oUI(0&2HxTFH*hm@wR7F.,(_' );
define( 'SECURE_AUTH_SALT', 'e{F .HBf:2KD(=Hl|.g|xLkzV!H!G>eUuODb4~/z9[IK`L<H5zpMtn?%_4cQ;wR2' );
define( 'LOGGED_IN_SALT',   '7>hSE%DI-MK!76a]g_%IW|34My9R7C]^8lu2$M%bi1S5_!c3v)#o+r#P/AJKmYBG' );
define( 'NONCE_SALT',       'mIY0>~}j#:vY|p.YrX}9CML/v+!W-zZf.?<#lFSZz{c^kQfhgh5,TI4?t<VFmul#' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'sm_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/* WordPress的临时目录。*/
define('WP_TEMP_DIR', ABSPATH.'wp-content/tmp');

define("FS_METHOD", "direct");

define("FS_CHMOD_DIR", 0777);

define("FS_CHMOD_FILE", 0777);

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
