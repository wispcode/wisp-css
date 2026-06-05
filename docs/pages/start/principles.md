 
## Design Principles

CSS has always had a clear purpose: describe how a document looks, not what it contains. Somewhere along the way, frameworks lost sight of that. Utility frameworks traded readable markup for granular control, leaving developers maintaining strings of dozens of single purpose classes on every element. Component frameworks went the other direction, shipping fully formed UI that was fast to start with and slow to make your own. Both approaches made the same mistake. They made decisions that belong to the developer.

Wisp starts from a different premise. A framework should give you structure and get out of the way. It should be modular enough that you can pull in a single object without inheriting an entire system, and extensible enough that nothing you add feels like you are working around it. Every module in Wisp is independent by design. Nothing assumes anything else is present.

Wisp also ships without a settings file. That is not a limitation but a deliberate choice. Sensible defaults mean you can drop it into a project and start immediately without configuring anything. When you are ready to make it your own, every default is exposed as a CSS custom property. Override what you need, where you need it, using the cascade the way it was always intended to be used. The framework does not need to know about your changes. That is the point.