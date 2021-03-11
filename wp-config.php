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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'signodev_Martin');

/** MySQL database username */
define( 'DB_USER', 'signodev_desenv');

/** MySQL database password */
define( 'DB_PASSWORD', 'sig2016@');

/** MySQL hostname */
define( 'DB_HOST', 'db_Martin');

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'e39c85f1e51cec3101eefc9571f474f9bc7d95a3');
define( 'SECURE_AUTH_KEY',  'dd2b4bfb3766a3de1533d1b884988c263d98ccfa');
define( 'LOGGED_IN_KEY',    'b09dd00d5cd1709f8d05e0a3c53d8570bf8a0a8a');
define( 'NONCE_KEY',        'bc0dc699715351d6210d725840c2962eedd3b003');
define( 'AUTH_SALT',        'b54cf277291d335d122a80f37597ea86e1b578a6');
define( 'SECURE_AUTH_SALT', '775b9fd0a0bf749d5d538b3f34280d5ac373ea2f');
define( 'LOGGED_IN_SALT',   '127457bd1e1d69af35b65cdbc1eaf547ca738b69');
define( 'NONCE_SALT',       '5f9c55ed3226ffbcc26e5fc8c90505dd8f7efb4c');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

// If we're behind a proxy server and using HTTPS, we need to alert WordPress of that fact
// see also http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
	$_SERVER['HTTPS'] = 'on';
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
