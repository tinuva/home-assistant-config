# Home Assistant Configuration Documentation

This directory contains documentation for custom fixes, modifications, and customizations applied to this Home Assistant installation.

## Custom Fixes

### Dreame Vacuum Integration

- **[Property Batch Size Fix](dreame-vacuum-property-batch-size-fix.md)** - Fixes timeout issues during device initialization on certain firmware versions by implementing adaptive batch sizing for property requests.

## Purpose

These documents serve to:

1. **Document customizations** - Keep track of changes made to custom components and integrations
2. **Maintain knowledge** - Preserve understanding of why changes were made and how they work
3. **Facilitate updates** - Help reapply fixes after component updates that may overwrite changes
4. **Share solutions** - Provide reference for similar issues in the future

## Maintenance

When updating custom components or integrations:

1. Check if any documented fixes apply to the updated component
2. Review if the upstream update includes official fixes for documented issues
3. Reapply custom fixes if still necessary
4. Update documentation to reflect current status

## Contributing

When adding a new custom fix:

1. Create a new markdown file in this directory with a descriptive name
2. Include the following sections:
   - Problem description
   - Root cause analysis
   - Solution approach
   - Implementation details
   - Testing procedures
   - References
3. Update this README to link to the new documentation

---

**Last Updated**: 2025-01-10